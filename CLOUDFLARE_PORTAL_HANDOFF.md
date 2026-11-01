# RTAFNC HRIS & Personnel Knowledge Portal — Cloudflare handoff

Deployment target: Cloudflare Pages / Workers Builds
Branch: `portal-cloudflare`
Production writes: **OFF**

## Source baseline
The latest UI prototype is maintained in Lovable project `55dc00c0-6177-46cf-b7f2-b1e354aae22b` (Air Force Nurse HR). The target portal contains:

1. Dashboard / command overview
2. HRIS personnel authority
3. Personnel Wiki
4. Source Archive
5. P0 Gap Matrix
6. Ingest Queue
7. Change Log

## Safety rules
- Do not expose personnel PII or secrets in a public/static build.
- Archive status and verification status are separate.
- Only CURRENT/VERIFIED reusable rules may be promoted into the Wiki.
- Historical material must not overwrite current orders/regulations.
- Production write remains disabled until UAT and RBAC verification are complete.

## Cloudflare build target
- Framework: Vite/React
- Build command: `npm run build`
- Output directory: `dist`
- Deployment branch: `portal-cloudflare`

This branch is a staging/deployment lane and must not replace the existing HRIS production baseline until the portal source has been synchronized and tested.