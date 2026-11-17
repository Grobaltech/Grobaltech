# Grobaltech website — implementation plan

## Goal
Build a polished, responsive Grobaltech Technologies website that follows the visual language, page patterns and visitor experience of the Achrovin Pro demo, while remaining a separately implemented, Cloudflare-deployable application.

Reference: https://preview.desertthemes.com/pro/achrovin/

## Starting point
The uploaded `grobaltech-app` archive provides React 19, TypeScript, Vite, Tailwind CSS v4, React Router and Supabase JS. Its component/page structure was reviewed and used to guide the implementation. The current repository now has a fresh Cloudflare-ready application foundation and additional portfolio routes.

## Progress

### Completed in the repository
- React 19 + TypeScript + Vite application entry and build configuration.
- Tailwind CSS v4 and a Grobaltech design system.
- Responsive information strip, sticky header, navigation and mobile menu.
- Homepage hero, company introduction, services, approach, selected work and company highlights.
- Engagement models and accessible native FAQ disclosures.
- Scroll-triggered section reveals with reduced-motion support.
- Solutions portfolio page and individual solution detail route.
- Dedicated contact page and enquiry form with optional Supabase lead persistence and email fallback.
- Grobaltech favicon, metadata, Cloudflare Pages configuration and SPA fallback.

### Still to implement
- Team page with approved team profiles.
- Detailed project outcomes and approved case-study evidence.
- Blog/news listing and article pages.
- Approved company logo, real project imagery and final brand assets.
- Protected content-management interface and admin authentication screens.
- Privacy policy, terms, accessibility and SEO refinements.

## Build sequence

### 1. Public website experience
Refine the reference-inspired visual system, then add service details, case studies, company profile, team and editorial pages. Keep navigation, calls to action and page layouts consistent across routes.

### 2. Content and administration
Keep public content data-driven so copy, images, services, projects, team members and articles can be managed without editing components. Use Supabase tables with Row Level Security for persisted content and enquiries. Add a protected CMS only after the public data model and permissions are agreed.

### 3. Cloudflare delivery
- Frontend build: `npm run build`, output `dist`.
- Deploy the static frontend through Cloudflare Pages.
- Use Pages Functions or Workers for server-side endpoints, webhooks and integrations when required.
- Configure production environment variables in Cloudflare, not in committed files.
- Validate build, routes, mobile layouts, accessibility and performance before launch.

## Important security rules
- Never expose Supabase service-role credentials in browser code or `VITE_*` variables.
- Enquiry forms must be validated server-side before being stored.
- CMS routes must enforce authorization in the backend, not only hide controls in the UI.

## Reference fidelity and licensing
Achrovin Pro is a commercial WordPress theme/demo. Recreate its visible layout patterns and interaction concepts independently, using Grobaltech's own identity, copy, assets and implementation. Do not copy proprietary theme source or licensed media.

## Acceptance checklist
- [ ] All routes render and refresh correctly on Cloudflare Pages.
- [ ] Header, navigation and footer work on mobile and desktop.
- [x] Homepage foundation and supporting solutions/contact routes exist.
- [x] FAQ disclosures and mobile navigation are interactive.
- [ ] All enquiry submissions are securely stored and reviewable.
- [ ] All public content is editable through an authorized CMS.
- [ ] Production build completes successfully.
- [ ] Accessibility, SEO, performance and responsive behavior are checked before launch.
