# Grobaltech website — implementation plan

## Goal
Build a polished, responsive Grobaltech Technologies website that closely follows the visual language, page structure and visitor experience of the Achrovin Pro demo, while remaining a separately implemented, Cloudflare-deployable application.

Reference: https://preview.desertthemes.com/pro/achrovin/

## Starting point from the uploaded ZIP
The supplied `grobaltech-app` archive is a React 19, TypeScript and Vite application with Tailwind CSS v4, React Router and Supabase JS. Its initial component structure already separates the shared shell, page routes and homepage sections:

- Shared shell: `TopBar`, `Header`, `Layout`, `Footer`
- Homepage sections: hero, service cards, about, services, projects, CTA, team, process, testimonials, pricing, products and contact CTA
- Pages: home, products, product detail and contact
- Supabase client: `src/lib/supabase.ts`

Preserve and evolve this structure rather than replacing it with a WordPress/PHP runtime.

## Build sequence

### 1. Foundation and responsive shell
- Establish Grobaltech brand tokens: colors, typography, spacing, container widths, borders, shadows and button styles.
- Implement the top information/social strip and primary navigation.
- Add sticky header behavior, active navigation, mobile drawer, search/utility controls where appropriate.
- Create consistent page-title/breadcrumb headers and footer widget columns.
- Ensure keyboard navigation, visible focus states and accessible mobile controls.

### 2. Homepage composition
Build the page as configurable, reusable sections in a deliberate order:
- Hero / slider with primary and secondary calls to action
- Company information / quick facts
- Services and service detail links
- Why choose us / feature highlights
- Portfolio or projects
- Work process
- Team
- Testimonials
- Pricing or service packages
- Latest articles/news
- Contact CTA and enquiry details

### 3. Supporting pages and interactions
- About/company profile
- Services index and service details
- Portfolio index and project details
- Team
- Pricing
- Blog/news listing and article details
- Contact page with validated enquiry form
- Products/shop pages only if Grobaltech intends to sell products

### 4. Content and administration
- Keep public content data-driven so copy, images, services, projects, team members and testimonials can later be managed without editing components.
- Use Supabase tables with Row Level Security for persisted content and enquiries.
- Use server-side functions for privileged operations; never expose Supabase service-role credentials in the frontend.
- Add a protected admin/CMS only after the public site structure and data model are agreed.

### 5. Cloudflare delivery
- Frontend build: Vite `npm run build`, output `dist`.
- Deploy the static frontend through Cloudflare Pages.
- Use Pages Functions or Workers for server-side endpoints, webhooks and integrations when required.
- Configure SPA fallback/routing for React Router.
- Set production environment variables in Cloudflare, not in committed files.
- Validate production build, mobile layouts, metadata, accessibility and performance before launch.

## Reference fidelity and licensing
The reference is a commercial WordPress theme/demo. We can independently reproduce its visible layout patterns, interaction concepts and overall design direction, but should not copy its proprietary theme source, paid assets, logos, text or licensed media. Grobaltech's own identity, copy and imagery will be used throughout.

## Initial acceptance checklist
- [ ] All routes render and refresh correctly on Cloudflare Pages.
- [ ] Header, navigation and footer work on mobile and desktop.
- [ ] Homepage sections are responsive and reusable.
- [ ] Buttons and forms perform real actions (no decorative dead controls).
- [ ] Contact enquiries are validated and stored through a secure backend.
- [ ] No secrets are committed or exposed in browser code.
- [ ] Production build completes successfully.
