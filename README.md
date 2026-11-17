# Grobaltech Technologies

A Cloudflare-first website for Grobaltech Technologies, using the uploaded React/Vite project as the application foundation and an independently implemented design inspired by the Achrovin Pro reference.

## Technology
- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router
- Cloudflare Pages for the frontend
- Supabase for data and future content management

## Local development
```bash
npm install
cp .env.example .env
npm run dev
```

## Cloudflare Pages
- Build command: `npm run build`
- Build output: `dist`
- Framework preset: Vite
- Configure only the required public `VITE_*` environment variables in Cloudflare Pages.

The site will remain a static frontend at runtime. Server-side capabilities, form processing, integrations and protected operations should use Cloudflare Workers/Pages Functions and/or Supabase Edge Functions. Never put service-role keys or other secrets in browser-exposed `VITE_*` variables.

## Design direction
Recreate the reference's overall presentation and user experience with original Grobaltech branding, copy, assets and implementation. Do not copy proprietary theme source code or licensed assets. See [the implementation plan](docs/BUILD-PLAN.md).
