<p align="center">
  <a href="https://tchuekam.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/poztyfy-wordmark.png">
      <img alt="POZTYFY by GianTecH Empire" src=".github/assets/poztyfy-wordmark-black.png" width="460" />
    </picture>
  </a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/poztyfy-icon.png">
    <img alt="POZTYFY Icon" src=".github/assets/poztyfy-icon-black.png" width="90" />
  </picture>
</p>

<h2 align="center">The Next-Generation AI Multi-Channel Social Growth & Autonomous Scheduling Engine</h2>

<p align="center">
  <strong>Engineered by <a href="https://tchuekam.com">GianTecH Empire</a> · Founded by <a href="https://tchuekam.com">Rostand Tchuekam</a></strong>
</p>

<p align="center">
  <a href="https://github.com/Tchuekam/postyfy"><img src="https://img.shields.io/badge/GitHub-Tchuekam%2Fpostyfy-181717?style=flat-square&logo=github" alt="GitHub Repo" /></a>
  <a href="https://tchuekam.com"><img src="https://img.shields.io/badge/Official%20Site-tchuekam.com-612BD3?style=flat-square&logo=google-chrome&logoColor=white" alt="Website" /></a>
  <a href="https://docs.tchuekam.com"><img src="https://img.shields.io/badge/Documentation-docs.tchuekam.com-00B4D8?style=flat-square&logo=gitbook&logoColor=white" alt="Docs" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-AGPL%203.0-blue.svg?style=flat-square" alt="License" /></a>
</p>

---

## ⚡ Overview

**POZTYFY** is the ultimate enterprise-grade social media operating system designed, engineered, and maintained by **GianTecH Empire**.

Whether you are scaling personal brand authority, operating a multi-client digital agency, or orchestrating autonomous AI content marketing pipelines, POZTYFY provides end-to-end multi-platform scheduling, durable workflow execution, deep analytics, and native **Model Context Protocol (MCP)** support for autonomous agent interaction.

Integrates seamlessly with the **TchueKAM Agent** desktop ecosystem and GianTecH business automation suites to transform raw thoughts, transcripts, and assets into viral, high-converting social campaigns.

---

## 🌐 Supported Channels (30+ Platforms)

POZTYFY connects directly to official APIs across all tier-1 social networks, messaging communities, and developer ecosystems:

| Category | Platforms Supported |
| :--- | :--- |
| **Professional & Microblogging** | **LinkedIn** (Personal & Company Pages) · **X (Twitter)** · **Threads** · **Bluesky** · **Mastodon** |
| **Visual & Video** | **Instagram** · **TikTok** (Personal & Business) · **YouTube** · **Pinterest** · **Dribbble** |
| **Communities & Groups** | **Reddit** · **Discord** · **Telegram** · **Slack** · **Skool** · **Farcaster** · **Lemmy** · **Nostr** |
| **Blogging & Long-Form** | **WordPress** · **Medium** · **Dev.to** · **Hashnode** · **Listmonk** · **Beehiiv** |

---

## 💎 Key Features

- 📅 **Unified Interactive Visual Calendar**: Drag-and-drop scheduling across dozens of channels with timezone-aware publishing slots and queue automation.
- 🤖 **Autonomous AI Content Generation**: Built-in Copilot for drafting engaging hooks, generating platform-tailored variations, and repurposing content in one click.
- 🔌 **Native MCP (Model Context Protocol) Server**: Connect **TchueKAM Agent**, Claude Desktop, Cursor, or custom AI agents directly to your POZTYFY instance to schedule, inspect, and optimize posts conversationally.
- 🎨 **In-App Studio (Polotno Engine)**: High-speed canvas editor for designing images, social banners, and multi-slide carousels directly in your browser.
- 🛡️ **Durable Temporal Workflows**: Powered by Temporal.io for guaranteed execution, automatic retries, rate-limit backoffs, and zero lost schedules even across server reboots.
- 👥 **Multi-Tenant Team & Agency Management**: Roles, permissions, collaborative drafts, team review cycles, and customer workspaces.
- 📈 **Aggregated Performance Analytics**: Unified tracking of impressions, engagements, clicks, audience growth, and post performance.
- 🔗 **Shortlink Intelligence**: Native integrations with Dub.co, Kutt.it, Short.io, and LinkDrip for link tracking and UTM preservation.

---

## 🏗️ Architecture & Technology Stack

```
POZTYFY Architecture (GianTecH Empire)
├── apps/
│   ├── frontend/         # Next.js App Router, React, Tailwind CSS, SWR, Polotno
│   ├── backend/          # NestJS Modular REST API, Prisma ORM, Swagger, MCP Server
│   ├── orchestrator/     # Temporal.io Worker for durable background jobs & schedules
│   ├── extension/        # Browser extension for advanced platform sessions
│   └── sdk/              # Official TypeScript / Node.js API client SDK
└── libraries/
    ├── nestjs-libraries/ # Shared Prisma services, 30+ Social Integrations, Email
    ├── react-shared-libraries/ # Reusable UI components, Contexts, i18n
    └── helpers/          # Common validation, string formatters, link cleaners
```

- **Frontend**: Next.js, React, Tailwind CSS 3, Mantine, SWR, CopilotKit
- **Backend**: NestJS, TypeScript, Prisma ORM, Express
- **Orchestration**: Temporal.io (Distributed durable workflow engine)
- **Database & Cache**: PostgreSQL 17, Redis 7.2, Elasticsearch 7.17
- **Media Storage**: Cloudflare R2 (S3 compatible) or Local Storage
- **Email Delivery**: Resend & Nodemailer engines

---

## 🚀 Quick Start (Docker Deployment)

The fastest way to launch your own production or development instance of POZTYFY:

### 1. Clone the Repository
```bash
git clone https://github.com/Tchuekam/postyfy.git
cd postyfy
```

### 2. Configure Environment Variables
Copy the sample environment file and configure your URLs and keys:
```bash
cp .env.example .env
```

Key variables to configure in `.env`:
```env
# Primary URLs
MAIN_URL="https://your-domain.com"
FRONTEND_URL="https://your-domain.com"
NEXT_PUBLIC_BACKEND_URL="https://your-domain.com/api"
JWT_SECRET="generate-a-strong-random-secret"

# Storage (Cloudflare R2 or Local)
STORAGE_PROVIDER="local"

# Email Provider
EMAIL_PROVIDER="resend"
RESEND_API_KEY="your-resend-key"
EMAIL_FROM_ADDRESS="notifications@your-domain.com"
EMAIL_FROM_NAME="POZTYFY"

# AI Capabilities
OPENAI_API_KEY="your-openai-api-key"
```

### 3. Launch with Docker Compose
```bash
docker compose up -d
```

Your POZTYFY dashboard will be available at:
👉 `http://localhost:4007` (or your configured `MAIN_URL`)

---

## 🤖 Automations & Integrations

POZTYFY exposes a first-class developer API and pre-built integration nodes:
- **N8N / Make.com / Zapier**: Automate publishing workflows from Notion, Airtable, Google Sheets, or RSS feeds.
- **Node.js / TypeScript SDK**: Available in `apps/sdk` for programmatic content distribution.
- **MCP Server**: Seamlessly pluggable into modern AI developer tools and the **TchueKAM Agent** desktop environment.

---

## 🏢 About GianTecH Empire

**GianTecH Empire** is an innovative enterprise technology venture founded by **Rostand Tchuekam**, dedicated to engineering high-performance software, autonomous AI systems, and scalable digital solutions.

- **Founder & Visionary**: Rostand Tchuekam
- **Official Website**: [https://tchuekam.com](https://tchuekam.com)
- **Documentation**: [https://docs.tchuekam.com](https://docs.tchuekam.com)
- **Flagship AI Systems**: [TchueKAM Agent](https://tchuekam.com) · POZTYFY · Magida Enterprise
- **Contact & Inquiries**: `rebornedbetalpha@gmail.com` / `contact@tchuekam.com`
- **Headquarters**: Yaoundé (Bastos), Cameroon

---

## 📄 License

This software is distributed under the [AGPL-3.0 License](LICENSE). Built and maintained with passion by the **GianTecH Empire** engineering team.
