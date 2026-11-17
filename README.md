# Grobaltech Technologies

Cloudflare-first website project for Grobaltech Technologies.

## Planned application foundation
The supplied `grobaltech-app` ZIP contains a React 19, TypeScript and Vite starter with Tailwind CSS v4, React Router, Lucide icons and Supabase JS. Its source structure is intended to be the starting point for the website implementation. The application source and assets have not yet been committed to this repository.

## Target stack
- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router
- Cloudflare Pages for the frontend
- Cloudflare Workers/Pages Functions for server-side endpoints where needed
- Supabase for data and future content management

## Local development (after the starter source is added)
```bash
npm install
cp .env.example .env
npm run dev
```

## Cloudflare Pages
- Build command: `npm run build`
- Build output: `dist`
- Framework preset: Vite
- Configure required public `VITE_*` environment variables in Cloudflare Pages.

Never put service-role keys or other secrets in browser-exposed `VITE_*` variables.

## Design direction
Independently recreate the Achrovin Pro reference's visual language, page patterns and interactions with original Grobaltech branding, copy, assets and implementation. Do not copy proprietary theme source code or licensed assets. See [the implementation plan](docs/BUILD-PLAN.md).
