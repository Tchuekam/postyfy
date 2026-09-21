import { parse } from 'tldts';

export function getCookieUrlFromDomain(domain: string) {
  if (!domain) {
    return undefined;
  }
  try {
    const url = parse(domain, { allowPrivateDomains: true });
    if (
      url.isPrivate ||
      url.isIp ||
      !url.domain ||
      url.hostname === 'localhost' ||
      url.hostname?.endsWith('.vercel.app') ||
      url.hostname?.endsWith('.railway.app')
    ) {
      return undefined;
    }
    return '.' + url.domain;
  } catch {
    return undefined;
  }
}
