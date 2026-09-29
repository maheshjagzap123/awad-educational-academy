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


---

## 7. Second Pass — Crawlability, Content & Tracking (P0–P4)

This round addressed the single biggest remaining risk from the checklist: **the site was a pure client-side SPA, so crawlers received an empty `<div id="root">` shell with no text or per-page metadata.** Everything below preserves the existing design and the "verified data only" rule.

### 7.1 P0 — Build-time prerendering (crawlability)
The 8 static routes, every confirmed course page, and the 404 are now **prerendered to real HTML at build time**. Googlebot and non-JS crawlers get full content plus correct per-page `<title>`, description, canonical, robots, Open Graph, Twitter, and JSON-LD. The client then **hydrates** the same markup.

- `src/App.jsx` — router removed from here; now exports just the `<Routes>` tree so it can be wrapped by `BrowserRouter` (client) or `StaticRouter` (build).
- `src/main.jsx` — wraps `App` in `BrowserRouter`; uses `hydrateRoot` when prerendered markup exists, else `createRoot`.
- `src/entry-server.jsx` — server entry: renders a route to an HTML string and returns the SEO data captured during render.
- `src/hooks/useSeo.js` — now also **captures the resolved SEO synchronously during render** (via `setSeoCollector`) so the prerender can build a real `<head>`. Client behaviour is unchanged (the collector is a no-op on the client).
- `vite.config.js` — one config, two builds: normal client build + an SSR build emitted to `dist/server/`.
- `scripts/prerender.mjs` — renders each route, strips the static SEO fallback from the shell, injects per-route head + JSON-LD, and writes `dist/<route>/index.html` (+ `dist/404.html`).
- `package.json` — `build` = `vite build` → `vite build --ssr` → `node scripts/prerender.mjs`.
- `vercel.json` — `cleanUrls: true`, `trailingSlash: false`; SPA fallback now points at `/404.html`.

**Verified:** `npm run build` produces 14 route HTML files + `404.html`; the home page ships ~50 KB of real HTML with `<h1>`, "Kaij"/"Foundation" body text, WebSite + EducationalOrganization schema; each route has exactly one `<title>` and one canonical, with the correct per-page values (e.g. `/courses/foundation-program` → Course + BreadcrumbList schema, `index, follow`).

### 7.2 P1 — Organization / LocalBusiness schema
`organizationJsonLd()` (previously dead code) is now rendered on the home page inside a `@graph` alongside the `WebSite` entity, giving Google a proper business entity (`name`, `url`, `logo`, `image`, `address`, `telephone`, `@id`). `sameAs` is still emitted **only** when the academy confirms official profiles. No ratings, reviews, or hours are invented.

### 7.3 P2 — Course pages & FAQ (content SEO)
- **Course detail pages** are now indexable for confirmed courses, carry `Course` JSON-LD (verified fields + `provider` = the academy), and are included in `sitemap.xml` via `buildCourseRoutes(courses)`.
- **New `/faq` page** (`src/pages/FaqPage.jsx`, content in `src/data/faqs.js`) with genuine, honest FAQs as real HTML text plus `FAQPage` structured data. Added to the primary nav and the sitemap. Questions the academy has not confirmed (exact timings, demo classes, material) direct the reader to call rather than inventing answers.

### 7.4 P3 — Image SEO / Core Web Vitals
- Added intrinsic `width`/`height` to fixed-size images (gallery `1600×1066`, marquee, navbar/footer/hero logos `757×407`) to prevent layout shift (CLS).
- The hero logo (LCP candidate) is eager-loaded with `fetchPriority="high"` — **not** lazy-loaded.
- Faculty and About-management photos rely on CSS `aspect-ratio` boxes (already present) so space is reserved even before dimensions are known.
- Alt text and below-the-fold lazy-loading were already correct and were left as-is.
- **Follow-up (not done):** convert JPEG gallery photos to WebP/AVIF + responsive `srcset`. This needs an image pipeline and is deferred; current JPEGs are acceptable for launch.

### 7.5 P4 — Analytics & conversion tracking (inert until enabled)
`src/lib/analytics.js` loads GA4 **only** when `VITE_GA_MEASUREMENT_ID` is set — with no ID, no script loads and no data is sent. Wired events: `page_view` (per route), `phone_click`, `whatsapp_click`, `map_click` (delegated link listener in `Layout`), `contact_form_start` + `contact_form_submit` (Contact page), and `course_view` (course pages). Documented in `.env.example`.

---

## 8. External / Manual Tasks (cannot be done in code)

These require academy-owned accounts, real credentials, or assets, and must be completed by the academy/owner. Nothing here should be faked.

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | **Custom domain** | ☐ Pending | Buy/connect an academy-owned domain (e.g. `awadeducationalacademy.in`). Then set `VITE_SITE_URL` to it and redeploy — canonical, OG, sitemap, robots all update from that one value. |
| 2 | **Google Search Console** | ☐ Pending | Verify the domain, submit `https://<domain>/sitemap.xml`, inspect the home + key pages, request indexing, then monitor coverage & queries. |
| 3 | **GA4 property** | ☐ Pending | Create a GA4 property, copy the `G-XXXXXXXXXX` Measurement ID into `VITE_GA_MEASUREMENT_ID` (hosting env vars). Tracking code is already wired and inert until then. |
| 4 | **Google Business Profile** | ☐ Pending | Claim & verify the Kaij listing. Confirm name, address, phone, category (e.g. *Coaching centre*), hours, website (the new domain), photos, and respond to reviews. Biggest lever for "coaching classes near me" / "in Kaij". |
| 5 | **NAP consistency** | ☐ Verify | Confirm the academy's official Name/Address/Phone and reconcile against the Justdial/GBP listings. The site pulls NAP from `siteConfig.js`; correct it there if the official details differ (do not blindly copy directories). |
| 6 | **Social preview image** | ☐ Pending | Provide a ~1200×630 branded image ("Awad Educational Academy — Kaij, Beed"). Add it to `/public`, then point `siteConfig.ogImage` at it (currently the logo is used). |
| 7 | **`sameAs` social/business profiles** | ☐ Pending | Provide official Google Business, Instagram, Facebook, YouTube URLs; set them in `siteConfig.js` and they flow into schema automatically. |
| 8 | **Opening hours / email / WhatsApp** | ☐ Pending | Fill `workingHours`, `email`, `whatsapp` in `siteConfig.js` once confirmed — this enables the WhatsApp buttons, email links, and hours in schema. |
| 9 | **Faculty / results / testimonials** | ☐ Pending | Replace the empty faculty list, empty results, and the clearly-marked sample testimonials in `src/data/content.js` with genuine, academy-approved data. Their pages/schema will populate automatically. |
| 10 | **Enquiry form backend** | ☐ Pending | The form currently composes a phone/WhatsApp-friendly message client-side. Wire a form service or backend when available. |
| 11 | **Android app "Download" button** | ☐ Hold | Public trackers suggest the app was removed from Google Play (Feb 2025). Do **not** add a Play Store button until the academy confirms the current official status. |
| 12 | **Lighthouse / Core Web Vitals** | ☐ Recommended | Run Lighthouse (mobile) on the live domain for LCP/INP/CLS. If more speed is wanted, route-level `React.lazy` code-splitting is the main lever (deferred to avoid behaviour changes now). |
| 13 | **Rich Results validation** | ☐ Recommended | Validate Organization / Course / FAQ / Breadcrumb schema in Google's Rich Results Test once live. |

> **Content principle carried through both passes:** nothing was fabricated. Every unconfirmed detail either stays a clearly-marked placeholder or directs users to contact the academy.
