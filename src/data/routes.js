// ============================================================
// INDEXABLE PUBLIC ROUTES
//
// Single source of truth for the pages that should appear in
// search engines. Used to generate sitemap.xml at build time
// (scripts/generate-sitemap.mjs).
//
// Notes:
//   • Dynamic course pages (/courses/:slug) are added here only
//     when the academy confirms real courses — placeholder course
//     pages are set to noindex and intentionally excluded.
//   • Utility/error routes (404) are NOT listed.
// ============================================================

/** @type {{ path: string, changefreq: string, priority: number }[]} */
export const indexableRoutes = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/courses", changefreq: "weekly", priority: 0.9 },
  { path: "/faculty", changefreq: "monthly", priority: 0.7 },
  { path: "/results", changefreq: "monthly", priority: 0.7 },
  { path: "/gallery", changefreq: "monthly", priority: 0.6 },
  { path: "/testimonials", changefreq: "monthly", priority: 0.6 },
  { path: "/faq", changefreq: "monthly", priority: 0.6 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
];

/**
 * When real courses are confirmed, append their detail pages here,
 * e.g. buildCourseRoutes(courses.filter(c => c.confirmed)).
 * This keeps the sitemap automatically in sync with new courses.
 */
export function buildCourseRoutes(confirmedCourses = []) {
  return confirmedCourses
    .filter((c) => c && c.confirmed && c.slug)
    .map((c) => ({
      path: `/courses/${c.slug}`,
      changefreq: "monthly",
      priority: 0.7,
    }));
}

export default indexableRoutes;
