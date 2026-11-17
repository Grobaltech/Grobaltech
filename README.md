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
The homepage and portfolio work without Supabase credentials. Optional public Supabase settings are documented in `.env.example`.

To enable saved enquiries:
1. Create or select the Supabase project for this website.
2. Run `supabase/migrations/202611180001_initial_website_cms.sql` in its SQL Editor.
3. Create the first administrator through Supabase Auth, then run the role-assignment SQL at the bottom of the migration using that user's Auth UUID.
4. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the local environment and Cloudflare Pages environment settings.

The browser uses only the public anon/publishable key. Never expose a Supabase service-role key in a `VITE_*` variable. Without Supabase configuration, the contact forms open an email draft instead of pretending to store the enquiry.

## Implemented
- Responsive top information strip, sticky navigation and mobile menu
- Homepage hero, company introduction, services, approach and selected project sections
- Engagement models and interactive FAQ disclosures
- Company profile and principles page (`/about`)
- Services overview and individual service detail routes (`/services`)
- Projects index and individual project case-study routes (`/projects`)
- Solutions portfolio and individual solution detail routes
- Dedicated project enquiry page
- Supplied Grobaltech lightning emblem in the shared header and favicon
- Page metadata, keyboard focus styling, Cloudflare Pages SPA fallback and security headers
- Scroll-triggered section reveals with reduced-motion support

## Current limitations / next build stages
- Enquiry forms can persist enquiries after the Supabase migration and public environment variables are configured; otherwise they prepare an email draft.
- Portfolio content and imagery are currently maintained in source files; the initial RLS-protected content schema is prepared, but the CMS interface is a later stage.
- Replace temporary stock photography with approved Grobaltech/project imagery.
- Add service detail, project case-study, team, news/blog and privacy/terms pages.
- Run a dependency install and production build in the deployment environment before publishing.

## Design direction
The site is being independently developed around the visual direction of the Achrovin Pro reference, using Grobaltech branding, original copy and implementation. The reference is a design guide; proprietary theme code and licensed assets are not copied.

See [docs/BUILD-PLAN.md](docs/BUILD-PLAN.md) for the staged implementation plan.
