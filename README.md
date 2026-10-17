# HRIS RTAFNC OneForAll — Personnel Service Hub

ต้นแบบระบบกำลังพล **วิทยาลัยพยาบาลทหารอากาศ** สำหรับ Web / GPT Site / LINE LIFF

## Current staging branch

`feature/service-hub-staging`

แนว UI ใช้แนวคิด service-hub แบบ mosaic/tile: Hero ใหญ่ + เมนูบริการเป็นช่อง + bottom navigation บนมือถือ โดยปรับ branding เป็น RTAFNC และไม่คัดลอกทรัพย์สินของแบรนด์อื่นโดยตรง

## What is installed

- Mobile-first Personnel Service Hub
- 12 service tiles
- Search services
- Personnel Command Center summary shell
- 8-step end-to-end HR workflow
- Optional Secure HRIS API adapter
- Privacy-safe demo fallback
- No credentials or personnel PII embedded in frontend

## Main modules

- Personnel Directory
- Organization / Command Chain
- Position & Manpower
- Orders & Evidence
- Leave & Rights
- Education & Capability
- Welfare
- Workflow Inbox
- Reports
- Personnel Knowledge
- LINE OA / LIFF
- HR Support

## Tech Stack

- Vite + React 18
- Tailwind CSS + custom responsive CSS
- React Router
- Secure API adapter via `VITE_HRIS_API_BASE`

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:5173`

## Secure API

Do **not** put personnel data or credentials in the repository. Configure only the secure API base URL during deployment:

```env
VITE_HRIS_API_BASE=https://your-secure-api.example
```

The frontend expects server-side identity and RBAC enforcement.

## Build

```bash
npm run build
npm run preview
```

## Flow and security

See [`docs/FLOW.md`](docs/FLOW.md).

## Release rule

This branch is **STAGING ONLY**. Do not connect production write operations until identity, RBAC, audit logging, PII scanning, and UAT are complete and explicitly approved.
