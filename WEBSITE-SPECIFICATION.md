# Awad Educational Academy — Website Specification & Content Flow

> **Document purpose:** Define the currently known website content, page structure, content flow, UI/UX direction, SEO requirements, and the information still to be collected from the academy for a new professional **static** website.
>
> **Guiding principle:** Build the first version around **verified information**, not assumptions. Keep the architecture flexible so missing information can be added later without redesigning the site.
>
> **Content status legend:**
> - ✅ **Verified** — Confirmed and safe to publish.
> - 🟡 **To Be Confirmed (TBC)** — Placeholder only; do not publish until confirmed.
> - 🔵 **To Be Provided by Academy (TBP)** — Awaiting content/media from the academy.

---

## 1. Project Overview

| Field | Detail |
|---|---|
| **Academy Name** | Awad Educational Academy |
| **Location** | Kaij, Beed, Maharashtra, India |
| **PIN Code** | 431123 |
| **Website Type** | Professional educational institute website |
| **Primary Local Area** | Kaij and Beed, Maharashtra |
| **Tech Stack** | React 19 + Vite, React Router, `lucide-react` icons; config-driven content |
| **Primary Device** | **Mobile-first** — most visitors use mobile; design and test for mobile before desktop |

### Technical Approach

- Built as a **React (Vite)** single-page application, matching the conventions of the existing `English` project in this solution.
- **Mobile-first is the top priority.** The academy's audience (students and parents in Kaij/Beed) primarily browses on phones, so every layout, tap target, image, and font size is designed for small screens first, then enhanced for tablet/desktop.
- **Config-driven content:** verified data and placeholders live in a central config (`src/config/siteConfig.js`) and content data files, so unconfirmed information can be filled in later without touching layout code.
- Client-side routing with SEO-friendly URLs; per-page titles/meta and structured data.

### Primary Website Goals

1. Establish a professional online presence for Awad Educational Academy.
2. Clearly explain who the academy is.
3. Present available courses/classes.
4. Showcase faculty members.
5. Showcase student results and achievements.
6. Display academy photographs and activities.
7. Display genuine student/parent testimonials.
8. Make it easy for students and parents to contact the academy.
9. Generate student enquiries.
10. Improve the academy's visibility in Google search.
11. Build trust with students and parents.

---

## 2. Currently Known Academy Information

### Basic Information (✅ Verified)

- **Academy Name:** Awad Educational Academy
- **Location:** Kaij, Beed, Maharashtra
- **PIN Code:** 431123
- **Category:** Education Center / Educational Institute

### Publicly Listed Address (✅ Verified)

> Ground Floor, Rangoli Dresses, Prof. Dr. Vithal Awad, Kaij–Sabla Road, Kaij, Beed, Maharashtra – 431123

### Public Phone Number (✅ Verified)

> +91 94221 05262

### Brand Assets (✅ Verified)

- **Logo:** `images/logo.png` — "AWAD educational academy" wordmark with a stylized open-book graphic forming the center of "AWAD".
- **Brand colors (derived from logo):**
  - Primary — deep navy blue (lettering): suitable for header, headings, footer.
  - Accent — azure / sky blue (book graphic): suitable for buttons, links, highlights, CTAs.
  - Background — clean white.

### Information Still Required (🔵 To Be Provided by Academy)

- Official email address
- Official WhatsApp number
- Official Google Maps link
- Official social media links
- Official tagline
- Official description / about text
- Establishment year
- Founder / Director / Management information

---

## 3. Website Sitemap

Primary pages:

1. Home
2. About Us
3. Courses / Classes
4. Faculty
5. Results & Achievements
6. Gallery
7. Testimonials
8. Contact Us

### Header

- Academy logo
- Academy name
- Navigation menu
- Primary enquiry/contact button (**Enquire Now**)
- Header remains easily accessible while scrolling.

### Mobile Navigation

- Clean hamburger navigation.
- Simple, easy for students and parents to understand.

---

## 4. Home Page

The Home page should immediately communicate: who the academy is, where it is located, what educational services/classes it provides, why students should consider it, and how to contact/enquire.

### Section 1 — Hero Section

- **Heading:** Awad Educational Academy
- **Supporting statement:** *A professional educational institute serving students in Kaij, Beed, Maharashtra.* (🟡 update after official tagline/description is provided)
- **CTA buttons:** Enquire Now · Call Us · Explore Courses
- ❌ Do **not** invent claims such as "No. 1", "Best Academy", "100% Results".

### Section 2 — Introduction

- Known text (✅): *Awad Educational Academy is an educational institute located in Kaij, Beed, Maharashtra.*
- Build so a detailed official description can be added later (🔵).
- **CTA:** Know More About Us

### Section 3 — Courses / Classes Preview

- ⚠️ Exact course list **not yet confirmed** — do **not** invent course names.
- Use structured content placeholders (e.g., Course / Class 01, 02, 03) that can be replaced with real data later.
- **Each course card supports** (display only confirmed fields):
  - Course name
  - Short description
  - Duration
  - Mode
  - Eligibility
  - Batch timing
  - Enquiry button
- **CTA:** View All Courses

### Section 4 — Why Choose Awad Educational Academy

- Visually strong section for genuine strengths only. ❌ Do not invent benefits.
- Potential fields (🟡 confirm before publishing): Experienced faculty · Student-focused teaching · Learning environment · Academic guidance · Practical learning · Student support

### Section 5 — Faculty Preview

- **Each faculty card supports:** Photograph · Name · Designation · Subject/course · Qualification · Experience · Short introduction
- Complete verified faculty list not yet available (🔵) — design so profiles can be added later.
- **CTA:** Meet Our Faculty

### Section 6 — Results & Achievements

- Possible content: examination results · student ranks · awards · competition achievements · certifications · selections · other academy achievements.
- ❌ Do not publish any result numbers or rankings until confirmed (🟡).
- **CTA:** View Results & Achievements

### Section 7 — Testimonials

- Public listing information (context only, ✅): Google Business 4.0/5 (14 reviews); Justdial 4.1/5 (16 ratings).
- ⚠️ These ratings must **not** be auto-converted into testimonials.
- Individual testimonials added **only** after academy approval (🔵).
- **Fields:** Student/Parent name · Course/Class · Testimonial · Optional photograph

### Section 8 — Gallery Preview

- Real academy photographs only, supplied/approved by the academy (🔵).
- Possible categories: Academy · Classrooms · Faculty · Students · Events · Activities · Achievements
- **CTA:** View Gallery

### Section 9 — Contact / Enquiry CTA

- Example heading: *Have a Question About Our Classes?* / *Get in touch with Awad Educational Academy today.*
- **Buttons:** Call Now · WhatsApp · Send Enquiry
- ⚠️ Enable WhatsApp only after the official WhatsApp number is confirmed (🔵).

---

## 5. About Us Page

Focus: establish trust.

- **Academy Introduction:** who the academy is, location, educational purpose, history, teaching approach.
- **Mission:** 🔵 To Be Provided by Academy.
- **Vision:** 🔵 To Be Provided by Academy.
- **Academy Journey (🔵):** establishment year · important milestones · growth · major achievements.
- **Management (🔵):** name · official designation · qualification · short introduction · photograph.
- ❌ Do not assign titles (Founder, Director, Principal, etc.) until confirmed.

---

## 6. Courses / Classes Page

One of the most important pages for SEO and enquiries. Clean course listing layout.

**Each course/class supports (show only confirmed fields):**

- **Course Name** — 🟡 To Be Confirmed
- **Short Description** — 🔵 To Be Provided by Academy
- **Subjects** — 🟡 To Be Confirmed
- **Duration** — 🟡 To Be Confirmed
- **Batch Timing** — 🟡 To Be Confirmed
- **Mode** — Offline / Online / Both (show applicable only after confirmation)
- **Eligibility** — 🟡 To Be Confirmed
- **Admission Information** — 🟡 To Be Confirmed
- **Enquiry CTA** — **Enquire Now** (links to contact/enquiry form)

---

## 7. Faculty Page

Professional faculty directory using consistent profile cards.

**Each profile:** Name · Photograph · Designation · Subject · Qualification · Experience · Short biography

- ❌ Do not publish unverified faculty information (🔵).

---

## 8. Results & Achievements Page

Dedicated page to build trust. Verified content only.

- **Academic Results:** Exam · Year · Student · Result/Percentage · Rank
- **Student Achievements:** Competitions · Awards · Certifications · Selections
- **Academy Achievements:** Recognitions · Awards · Events · Milestones
- Every achievement must be supported by information/media provided or approved by the academy (🔵).

---

## 9. Gallery Page

Responsive image gallery.

- **Categories:** Academy · Classroom · Faculty · Students · Events · Activities · Achievements
- **Requirements:** optimized images · lazy loading · responsive layout · descriptive alt text · lightbox/gallery viewing · fast loading
- ❌ Do not use stock images where real academy photographs are available (🔵).

---

## 10. Testimonials Page

Genuine, approved feedback only.

- **Each testimonial:** Name · Student/Parent · Course/Class · Testimonial · Photograph (if approved)
- ❌ Do not fabricate testimonials.

---

## 11. Contact Us Page

Focus heavily on student enquiries.

### Contact Information

- **Awad Educational Academy** (✅)
- Ground Floor, Rangoli Dresses, Prof. Dr. Vithal Awad, Kaij–Sabla Road, Kaij, Beed, Maharashtra – 431123 (✅)
- Phone: **+91 94221 05262** (✅)
- Still required (🔵): official email · WhatsApp · Google Maps URL · social media links

### Enquiry Form

Fields (keep simple; avoid unnecessary personal data):

- Full Name
- Mobile Number
- Email
- Course/Class Interested In
- Message

### Google Map

- Embed the verified Google Maps location after confirmation (🔵).

---

## 12. UI/UX Direction

**Overall style:** Clean · Professional · Modern · Trustworthy · Educational · Responsive · Easy to navigate · Not overly flashy.

**Design priorities (in order):** Readability → Trust → Clear course information → Easy enquiry → Mobile experience → Fast loading → SEO.

- **Header:** logo · academy name · navigation · Enquire Now button; stays accessible while scrolling.
- **Hero:** strong educational visual; prioritize real academy photography; avoid stock-photo-heavy design.
- **Cards:** clean cards for courses, faculty, achievements, testimonials.
- **CTA text:** use clear action text (Enquire Now, Contact Us, Call Now, View Courses, Meet Our Faculty). Avoid vague buttons like "Click Here".

---

## 13. Mobile Responsiveness

Design mobile-first. Verify: mobile navigation · hero · course cards · faculty cards · gallery · forms · buttons · typography · images · contact section.

- No horizontal scrolling.
- Buttons easy to tap on mobile.

---

## 14. SEO Strategy

Consider SEO from the start.

### Primary Local SEO Keywords (use naturally; no keyword stuffing)

- Awad Educational Academy
- Awad Educational Academy Kaij
- Educational Academy in Kaij
- Education Institute in Kaij
- Classes in Kaij
- Coaching classes in Kaij
- Education classes in Beed
- Educational institute in Beed
- Classes in Beed
- [Actual course name] in Kaij *(after course confirmation)*
- [Actual course name] in Beed *(after course confirmation)*

---

## 15. Page-Level SEO

Each page should have: unique SEO title · unique meta description · one primary H1 · proper H2/H3 hierarchy · SEO-friendly URL · relevant internal links · image alt text · canonical URL · Open Graph metadata · social sharing metadata.

**URL structure:**

```text
/
/about
/courses
/courses/[course-name]
/faculty
/results
/gallery
/testimonials
/contact
```

Avoid: `/page1`, `/page?id=123`, `/test`, `/newpage`.

---

## 16. Suggested SEO Titles

*(Initial examples; refine after actual course info is confirmed.)*

| Page | Title |
|---|---|
| Home | Awad Educational Academy \| Education & Classes in Kaij, Beed |
| About | About Awad Educational Academy \| Kaij, Beed |
| Courses | Courses & Classes \| Awad Educational Academy, Kaij |
| Faculty | Faculty \| Awad Educational Academy, Kaij |
| Results | Results & Achievements \| Awad Educational Academy |
| Gallery | Gallery \| Awad Educational Academy, Kaij |
| Testimonials | Student & Parent Testimonials \| Awad Educational Academy |
| Contact | Contact Awad Educational Academy \| Kaij, Beed |

---

## 17. Structured Data / Schema Markup

Implement appropriate structured data. Consider at minimum:

- EducationalOrganization
- LocalBusiness (where appropriate)
- BreadcrumbList
- Course (for individual confirmed courses)
- Person (for faculty profiles)
- ImageObject (for important images)

❌ Do not add false structured data: no fake ratings, reviews, course info, opening hours, or social profiles. Use verified information only.

---

## 18. Local SEO

Optimize for Kaij and Beed. Include verified: academy name · address · phone number · location · Google Maps · local area references.

**Maintain consistent NAP (Name + Address + Phone)** across the website and all public business profiles.

---

## 19. Google Business Profile Integration

Provide clear links to Google Maps and the Google Business Profile / review page where appropriate.

- ❌ Do not fabricate review information.
- If review links are added, use the academy's verified public profile.

---

## 20. Performance & Technical SEO

Optimize for: fast page loading · responsive design · WebP/AVIF images where appropriate · lazy-loaded gallery images · minified production assets · clean semantic HTML · proper heading hierarchy · accessible buttons and forms · good Core Web Vitals · mobile usability.

- Avoid unnecessary animations that hurt performance.

---

## 21. Accessibility

- Proper heading hierarchy
- Alt text for meaningful images
- Keyboard-friendly navigation
- Sufficient text contrast
- Visible focus states
- Proper form labels
- Accessible buttons
- Descriptive links

---

## 22. Internal Linking Strategy

Natural internal links, e.g.:

- Home → Courses
- Home → About
- Courses → Contact
- Faculty → About
- Results → About
- Gallery → About
- Testimonials → Contact

Every important page reachable through normal navigation.

---

## 23. Content Rules

- No fabricated information.
- No fake achievements.
- No fake testimonials.
- No fake faculty profiles.
- No unsupported claims such as "Best Academy".
- No fake statistics.
- No fake student numbers.
- No fake results.
- No fake rankings.
- No unverified course information.

When information is unavailable, use a placeholder in this document and replace it after academy confirmation.

---

## 24. Information Currently Missing (Collection Checklist)

### Academy (🔵)

- [ ] Official About description
- [ ] Establishment year
- [ ] Mission
- [ ] Vision
- [ ] Founder / Director details
- [ ] Official designations
- [ ] Academy tagline

### Courses (🔵)

- [ ] Complete course list
- [ ] Course descriptions
- [ ] Subjects
- [ ] Duration
- [ ] Batch timings
- [ ] Eligibility
- [ ] Admission process
- [ ] Online/offline availability

### Faculty (🔵)

- [ ] Faculty names
- [ ] Designations
- [ ] Subjects
- [ ] Qualifications
- [ ] Experience
- [ ] Photographs
- [ ] Short biographies

### Results (🔵)

- [ ] Recent results
- [ ] Student ranks
- [ ] Achievements
- [ ] Awards
- [ ] Certifications
- [ ] Selections

### Testimonials (🔵)

- [ ] Approved student testimonials
- [ ] Approved parent testimonials
- [ ] Names and course/class information

### Media (🔵)

- [ ] Logo
- [ ] Academy photographs
- [ ] Classroom photographs
- [ ] Faculty photographs
- [ ] Event photographs
- [ ] Achievement photographs

### Contact (🔵)

- [ ] Official email
- [ ] WhatsApp number
- [ ] Google Maps link
- [ ] Official social media links

---

## 25. Content Update Strategy

Build with a structure that makes future updates easy. When the academy provides new information:

- Replace placeholders.
- Add confirmed courses.
- Add faculty profiles.
- Add results.
- Add achievements.
- Add testimonials.
- Add gallery images.
- Update SEO titles and descriptions.
- Update structured data where applicable.

Do not redesign the website simply because new content is added, unless it requires a structural change.

---

## 26. Recommended Final Website Flow

```text
Home
  ↓
Academy Introduction
  ↓
Courses / Classes
  ↓
Why Choose the Academy
  ↓
Faculty
  ↓
Results & Achievements
  ↓
Testimonials
  ↓
Gallery
  ↓
Contact / Enquiry
```

**Primary conversion goal:** Visitor → Course Interest → Enquiry → Contact Academy

---

## 27. Future Content Expansion

Keep the architecture flexible for future additions (only when the academy provides the required information):

- New courses
- New faculty
- New achievements
- New results
- New testimonials
- Events
- Workshops
- Announcements
- Frequently Asked Questions
- Individual course landing pages

---

## 28. Final Development Principle

Build the first version around **verified information**, not assumptions. The site should be professional even with limited information, while the architecture makes future expansion easy.

**Priority order:**

> Trust → Clear Information → Student Enquiries → Local SEO → Performance → Easy Future Updates

Do not overcomplicate the website. The final result should feel like a genuine, professional educational academy website — not a generic template.
