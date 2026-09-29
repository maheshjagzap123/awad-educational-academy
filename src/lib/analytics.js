// ============================================================
// GOOGLE ANALYTICS 4 — Awad Educational Academy
//
// Fully INERT until a Measurement ID is provided via the
// VITE_GA_MEASUREMENT_ID environment variable. With no ID set:
//   • no gtag script is loaded,
//   • no network requests are made,
//   • trackEvent() / trackPageView() are safe no-ops.
//
// This lets us ship the event wiring now and switch analytics on
// later by simply setting the env var in the hosting provider —
// no code change required.
//
// Tracked conversion events (call from UI handlers):
//   phone_click, whatsapp_click, map_click,
//   contact_form_start, contact_form_submit, course_view
// ============================================================

const GA_ID =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_GA_MEASUREMENT_ID) ||
  "";

const isBrowser = typeof window !== "undefined";
export const analyticsEnabled = Boolean(GA_ID) && isBrowser;

let initialised = false;

/** Injects the gtag.js script once, on the client, only when enabled. */
export function initAnalytics() {
  if (!analyticsEnabled || initialised) return;
  initialised = true;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // We send page_view manually on each route change (SPA), so disable auto.
  window.gtag("config", GA_ID, { send_page_view: false });
}

/** Records a SPA page view. Safe no-op when analytics is disabled. */
export function trackPageView(path, title) {
  if (!analyticsEnabled || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

/** Records a custom event. Safe no-op when analytics is disabled. */
export function trackEvent(name, params = {}) {
  if (!analyticsEnabled || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
