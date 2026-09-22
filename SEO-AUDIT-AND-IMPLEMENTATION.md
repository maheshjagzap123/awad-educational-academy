# SEO Audit & Implementation — Awad Educational Academy

**Site:** Awad Educational Academy — Kaij, Beed, Maharashtra, India
**Stack:** React 19 + Vite 6, `react-router-dom` v7 (client-side SPA)
**Deployment:** `https://awad-educational-academy.vercel.app/` (temporary; final custom domain pending)
**Guiding rule:** Existing UI/design, colors, layout, animations, and component structure were preserved. No redesign. Only technical SEO, performance, accessibility, and configuration were changed. No unverified content was invented.

---

## 1. Current SEO Status (before this work)

The project already had a solid, config-driven foundation:

- **Framework/routing:** React SPA with clean, lowercase, hyphen-free URLs (`/about`, `/courses`, `/faculty`, `/results`, `/gallery`, `/testimonials`, `/contact`, `/courses/:slug`).
- **Metadata:** A `useSeo` hook set per-page `<title>`, meta description, `og:title/description/type/image`, and canonical — **but only when `siteConfig.siteUrl` was set, and it was empty**, so canonical and `og:url` were never emitted.
- **Titles/descriptions:** Every page already had a unique title and description.
- **Headings:** One `<h1>` per page (Hero on home, `PageHero` on interior pages); `<h2>`/`<h3>` used semantically via `SectionHeading`, `CourseCard`, `FacultyCard`.
- **Structured data:** A single `EducationalOrganization` JSON-LD block in `index.html` using verified name, address, and phone only.
- **Breadcrumbs:** Visual breadcrumbs existed in `PageHero`, but there was **no machine-readable `BreadcrumbList`**.
- **Accessibility:** Focus-visible styles, `prefers-reduced-motion` handling, labelled form inputs, accessible mobile menu (`aria-expanded`, `aria-label`), lazy-loaded gallery/faculty images.
- **NAP consistency:** Name, address, and phone were already centralized in `siteConfig.js` and reused everywhere.
- **No fabricated data:** Courses, faculty, results, testimonials, email, WhatsApp, maps, and socials were all correctly left as marked placeholders.

**Gaps identified:** empty site URL (no canonical/`og:url`), no `robots.txt`, no `sitemap.xml`, no web manifest, no apple-touch-icon, no Twitter title/description/image (only a bare `summary` card), no `og:site_name`/`og:locale`, no `BreadcrumbList`/`WebSite` schema, no per-page robots control, no skip-to-content link, a non-SPA `<a href>` in the mobile CTA, no Vercel SPA rewrite (deep links would 404 for crawlers), and thin internal linking on a few pages.

---

## 2. Changes Made

### Site URL / configuration
- Added **`VITE_SITE_URL` environment-variable resolution** in `src/config/siteConfig.js` (`SITE_URL` export) with a safe fallback to the current Vercel URL and trailing-slash stripping. The final domain now changes in **one place**.
- Added `.env.example` documenting `VITE_SITE_URL`.
- Added `locale: "en_IN"`, `ogImageAlt`, and `twitterCard: "summary_large_image"` to `siteConfig`.

### Metadata (per page)
- Rewrote `src/hooks/useSeo.js` to always emit, on every route:
  - `<title>`, meta description, **meta robots**
  - **canonical** `<link>` (now always resolves via `SITE_URL`)
  - Open Graph: `title`, `description`, `type`, `url`, `image`, `image:alt`, **`site_name`**, **`locale`**
  - Twitter/X: **`card` (summary_large_image)**, `title`, `description`, `image`, `image:alt`
  - Per-page **JSON-LD injection** (`BreadcrumbList` + optional page schema), safely replaced between routes.
- Managed tags are marked `data-managed-seo` so the hook never clobbers static `index.html` tags.
- Kept every page's existing unique title; descriptions were lightly refined to stay unique and natural (no keyword stuffing). Course detail and 404 pages now correctly send `noindex` where appropriate.

### Structured data
- Added `postalAddress` and `organizationJsonLd()` helpers to `siteConfig.js` (verified data only; `sameAs`/`email` included **only if** confirmed values exist).
- Added `BreadcrumbList` JSON-LD to all interior pages via `useSeo({ breadcrumbs })`.
- Added a `WebSite` JSON-LD block on the Home page.
- Retained the verified `EducationalOrganization` block in `index.html`.

### `index.html` (static crawler fallback)
- Added `apple-touch-icon` and `manifest` links.
- Added full OG (`site_name`, `image:alt`, `locale`) and Twitter (`summary_large_image`, title, description, image) tags mirroring the home page, plus `robots`.

### Sitemap / robots / manifest
- Added `src/data/routes.js` — single source of truth for indexable routes, with a `buildCourseRoutes()` helper so confirmed course pages are auto-included later.
- Added `scripts/generate-sitemap.mjs` — generates `public/sitemap.xml` and `public/robots.txt` from `VITE_SITE_URL` (env-driven, nothing hardcoded).
- Wired it as an npm **`prebuild`** script (runs automatically before `vite build`) plus a manual `generate-sitemap` script.
- Added `public/site.webmanifest`.

### Hosting / SPA correctness
- Added `vercel.json` with an SPA rewrite that serves `index.html` for app routes **while excluding** static assets and SEO files (`sitemap.xml`, `robots.txt`, `site.webmanifest`, images, JS/CSS), plus correct `Content-Type` headers for the sitemap and robots. This prevents deep-link 404s for crawlers.

### Accessibility
- Added a **skip-to-content link** and `.sr-only` utility in `globals.css`; `<main id="main" tabIndex={-1}>`.
- Converted `MobileCTA` enquiry `<a href>` to a router `<Link>` (no full reload).
- Improved gallery image `alt` fallback to be descriptive (uses category + location).

### Internal linking
- Faculty → **Contact Awad Educational Academy**
- Results → **Learn More About the Academy** (About)
- Gallery → **Learn More About the Academy** (About)
- 404 page now offers **Go Home**, **View Courses**, **Contact Us** (descriptive anchors; no "Click Here").

---

## 3. Remaining Items (blocked — need academy input)

These cannot be completed until the academy provides verified information. The architecture already supports each without redesign.

- **Final custom domain** → set `VITE_SITE_URL`; canonical, OG URLs, sitemap, robots, and schema all update automatically.
- **Social preview image** → a dedicated 1200×630 `og-image` is recommended; currently `og:image` uses `/logo.png`. Replace `siteConfig.ogImage` when supplied.
- **Official email** → set `siteConfig.email` (auto-shows in footer/contact and schema).
- **Official WhatsApp number** → set `siteConfig.whatsapp` (enables WhatsApp CTAs).
- **Google Maps location** → set `siteConfig.googleMapsEmbed` / `googleMapsUrl` (Contact map embed).
- **Final course list** → add confirmed courses in `src/data/content.js`; add their routes via `buildCourseRoutes()` in `src/data/routes.js`; then add `Course` schema.
- **Faculty profiles** → add to `content.js` (`confirmed: true`); then add `Person` schema.
- **Results/achievements & approved testimonials** → add to `content.js`.
- **Official social profiles** → set in `siteConfig`; they flow into `organizationJsonLd().sameAs` automatically.
- **Official logo / favicon set** → replace `public/logo.png`; optionally add multi-size icons.
- **Google Search Console verification** → add the real verification token after the domain is live (no fake code added).
- **Tagline / About text / establishment year / management** → fill in `siteConfig` and `content.js` placeholders.

---

## 4. Files Changed

### New files
- `.env.example`
- `vercel.json`
- `scripts/generate-sitemap.mjs`
- `src/data/routes.js`
- `public/site.webmanifest`
- `public/robots.txt` *(generated)*
- `public/sitemap.xml` *(generated)*
- `SEO-AUDIT-AND-IMPLEMENTATION.md` *(this report)*

### Modified files
- `index.html`
- `package.json` *(added `prebuild` + `generate-sitemap` scripts)*
- `src/config/siteConfig.js`
- `src/hooks/useSeo.js`
- `src/components/layout/Layout.jsx`
- `src/components/ui/MobileCTA.jsx`
- `src/styles/globals.css`
- `src/pages/HomePage.jsx`
- `src/pages/AboutPage.jsx`
- `src/pages/CoursesPage.jsx`
- `src/pages/FacultyPage.jsx`
- `src/pages/ResultsPage.jsx`
- `src/pages/GalleryPage.jsx`
- `src/pages/TestimonialsPage.jsx`
- `src/pages/ContactPage.jsx`
- `src/pages/CourseDetailPage.jsx`
- `src/pages/NotFoundPage.jsx`

---

## 5. SEO Configuration — where things live

| Concern | Location |
|---|---|
| **Site URL / domain** | `VITE_SITE_URL` env var → `SITE_URL` in `src/config/siteConfig.js` (fallback: Vercel URL). Documented in `.env.example`. |
| **Per-page metadata** | `src/hooks/useSeo.js`, called from each page in `src/pages/*`. |
| **Canonical / OG / Twitter** | `src/hooks/useSeo.js` (runtime) + `index.html` (static fallback for home). |
| **Structured data** | `src/config/siteConfig.js` (`organizationJsonLd`, `postalAddress`) + `index.html` (Organization) + `useSeo` (BreadcrumbList, WebSite/page schema). |
| **Sitemap** | `scripts/generate-sitemap.mjs` + `src/data/routes.js` → outputs `public/sitemap.xml`. Runs on `prebuild`. |
| **Robots** | `scripts/generate-sitemap.mjs` → outputs `public/robots.txt` (includes sitemap URL). |
| **Web manifest / icons** | `public/site.webmanifest`, `index.html` (`icon`, `apple-touch-icon`, `manifest`). |
| **NAP (name/address/phone)** | `src/config/siteConfig.js` — single source reused across navbar, footer, contact, schema. |
| **SPA routing / headers** | `vercel.json`. |

**To change the domain later:** set `VITE_SITE_URL` (locally in `.env` or in Vercel env settings) and rebuild. Canonical, `og:url`, structured-data URLs, `sitemap.xml`, and `robots.txt` all update from that one value.

---

## 6. Final Verification

What was actually checked:

- **Production build** — `npm run build` runs `prebuild` then `vite build`; completed with **no errors**. Confirmed twice.
- **Generated artifacts** — verified `dist/` contains `index.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `logo.png`, and hashed `assets/`.
- **`sitemap.xml`** — verified it lists all 8 indexable public routes with the resolved domain; excludes 404 and unconfirmed course pages.
- **`robots.txt`** — verified `Allow: /` and correct `Sitemap:` line using the resolved domain.
- **`index.html` output** — verified static title, description, robots, full OG + Twitter tags, icons/manifest links, and the verified Organization JSON-LD are present in the built file.
- **SEO metadata / structured data** — verified by source review that every page sets a unique title/description, canonical, OG, Twitter, robots, and (interior pages) a `BreadcrumbList`; JSON-LD is valid JSON via `JSON.stringify`.
- **Links** — verified internal links use descriptive anchor text and router navigation; the mobile CTA no longer triggers a full reload.
- **Accessibility (code-level)** — verified skip link + `sr-only` utility, `<main tabIndex={-1}>`, existing focus-visible and reduced-motion styles, labelled form inputs, and accessible mobile menu attributes.
- **Images** — verified lazy loading and descriptive `alt` fallbacks; gallery/faculty render only real data.

**Not independently tested in this session (recommend before go-live):**
- **Live device/responsive testing** at 320–1024px+ widths and real-browser rendering — needs a running browser/preview; the existing responsive CSS and mobile-first layout were reviewed in code but not visually rendered here.
- **Lighthouse / Core Web Vitals (LCP, CLS, INP)** — not measured in this session. The current JS bundle is ~314 kB (~96 kB gzipped); acceptable for launch. If further gains are wanted later, route-level code-splitting via `React.lazy` is the main lever (deferred to avoid changing behavior now).
- **Rich Results / schema validation** in Google's tools — recommended once the domain is live.
- **Enquiry form backend** — the form currently composes a WhatsApp/phone-friendly message client-side (no server); wire a backend or form service when available.

---

### Summary

The website is now technically stronger for SEO, more accessible, crawler-friendly, and ready for a future custom domain — with **no changes to the existing visual design**. All content rules were respected: nothing was fabricated, and every placeholder remains clearly pending academy confirmation.
