# Grobaltech Technologies

Cloudflare-first website for Grobaltech Technologies.

## Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router and Lucide icons
- Cloudflare Pages for hosting
- Cloudflare Workers/Pages Functions for future server-side features
- Supabase for optional data and content services

## Local development
```bash
npm install
cp .env.example .env
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Cloudflare Pages
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- The `public/_redirects` file enables client-side route fallback.
- `wrangler.toml` records the Pages build output directory.

## Environment
The current homepage works without Supabase credentials. Optional public Supabase settings are documented in `.env.example`. Never expose a Supabase service-role key in a `VITE_*` variable.

## Current implementation
- Responsive top contact strip and sticky navigation
- Hero, company introduction, service cards, approach, selected work and contact sections
- Mobile navigation
- Contact form that prepares an email enquiry
- Branded favicon and Cloudflare Pages SPA fallback

## Design direction
The site is being independently developed around the visual direction of the Achrovin Pro reference, using Grobaltech branding, original copy and original implementation. The reference is a design guide; proprietary theme code and licensed assets are not copied.

See [docs/BUILD-PLAN.md](docs/BUILD-PLAN.md) for the staged implementation plan.
