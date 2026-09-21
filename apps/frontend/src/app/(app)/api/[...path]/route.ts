import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const HOP_BY_HOP_HEADERS = new Set([
  'content-encoding',
  'content-length',
  'transfer-encoding',
  'connection',
  'keep-alive',
  'set-cookie',
  'etag',
]);

async function handler(
  request: NextRequest,
  context: { params: Promise<{ path?: string[] }> | { path?: string[] } }
) {
  try {
    const rawParams = await context.params;
    const pathSegments = rawParams?.path || [];
    const subPath = pathSegments.join('/');
    const search = request.nextUrl.search;

    const backendBase = (
      process.env.BACKEND_INTERNAL_URL ||
      'https://postiz-production-646a.up.railway.app/api'
    ).replace(/\/+$/, '');

    const targetUrl = `${backendBase}/${subPath}${search}`;

    const headers = new Headers();
    request.headers.forEach((value, key) => {
      const lower = key.toLowerCase();
      if (
        lower !== 'host' &&
        lower !== 'connection' &&
        lower !== 'content-length' &&
        lower !== 'accept-encoding'
      ) {
        headers.set(key, value);
      }
    });

    const isGetOrHead = request.method === 'GET' || request.method === 'HEAD';
    const body = isGetOrHead ? undefined : await request.arrayBuffer();

    const backendRes = await fetch(targetUrl, {
      method: request.method,
      headers,
      body,
      redirect: 'manual',
      cache: 'no-store',
    });

    const responseHeaders = new Headers();
    backendRes.headers.forEach((value, key) => {
      const lower = key.toLowerCase();
      if (!HOP_BY_HOP_HEADERS.has(lower)) {
        responseHeaders.set(key, value);
      }
    });

    // Ensure custom headers needed by frontend auth are exposed to client JavaScript
    responseHeaders.set(
      'Access-Control-Expose-Headers',
      'reload, onboarding, activate, auth, showorg'
    );

    // Retrieve raw Set-Cookie headers
    // @ts-ignore
    const rawCookies: string[] = typeof backendRes.headers.getSetCookie === 'function'
      // @ts-ignore
      ? backendRes.headers.getSetCookie()
      : [backendRes.headers.get('set-cookie')].filter(Boolean) as string[];

    let extractedAuthToken = '';

    // Strip invalid platform domain attribute (e.g. Domain=.vercel.app) which causes browsers
    // to reject cookies due to the Public Suffix List (RFC 6265)
    const cleanedCookies = rawCookies.map((cookieStr) => {
      // Check if this cookie has the auth JWT
      const match = cookieStr.match(/auth=([^;]+)/);
      if (match && match[1]) {
        extractedAuthToken = match[1];
      }

      // Remove any Domain= attribute so it becomes a valid Host-Only cookie for the current domain
      let cleaned = cookieStr.replace(/Domain=[^;]+;?\s*/gi, '');

      // Ensure SameSite is Lax for reliable first-party cookie persistence across modern browsers
      cleaned = cleaned.replace(/SameSite=None/gi, 'SameSite=Lax');

      return cleaned;
    });

    // If an auth token was set, also expose it as a header
    if (extractedAuthToken && !responseHeaders.has('auth')) {
      responseHeaders.set('auth', extractedAuthToken);
    }

    const responseBody = await backendRes.arrayBuffer();
    const nextResponse = new NextResponse(responseBody, {
      status: backendRes.status,
      statusText: backendRes.statusText,
      headers: responseHeaders,
    });

    // Append cleaned cookies to the outgoing Next.js response
    cleanedCookies.forEach((cookieStr) => {
      nextResponse.headers.append('set-cookie', cookieStr);
    });

    return nextResponse;
  } catch (err: any) {
    console.error('API reverse proxy error:', err);
    return NextResponse.json(
      { message: 'API reverse proxy error: ' + (err?.message || 'Unknown error') },
      { status: 502 }
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
export const OPTIONS = handler;
