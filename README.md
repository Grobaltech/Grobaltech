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
- `public/_redirects` enables client-side route fallback.
- `wrangler.toml` records the Pages build output directory.

## Environment
The homepage and portfolio currently work without Supabase credentials. Optional public Supabase settings are documented in `.env.example`. Never expose a Supabase service-role key in a `VITE_*` variable.

## Implemented
- Responsive top information strip, sticky navigation and mobile menu
- Homepage hero, company introduction, services, approach and selected project sections
- Engagement models and interactive FAQ disclosures
- Company profile and principles page
- Services overview and individual service detail routes
- Projects index and individual project case-study routes
- Solutions portfolio and individual solution detail routes
- Dedicated project enquiry page
- Branded favicon, page metadata and Cloudflare Pages SPA fallback
- Scroll-triggered section reveals with reduced-motion support

## Current limitations / next build stages
- Enquiry forms currently prepare an email draft; they do not yet persist enquiries.
- Portfolio content and imagery are currently maintained in source files; a secure CMS is a later stage.
- Replace temporary stock photography with approved Grobaltech/project imagery.
- Add service detail, project case-study, team, news/blog and privacy/terms pages.
- Run a dependency install and production build in the deployment environment before publishing.

## Design direction
The site is being independently developed around the visual direction of the Achrovin Pro reference, using Grobaltech branding, original copy and implementation. The reference is a design guide; proprietary theme code and licensed assets are not copied.

See [docs/BUILD-PLAN.md](docs/BUILD-PLAN.md) for the staged implementation plan.
