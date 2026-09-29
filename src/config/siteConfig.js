// ============================================================
// CENTRAL SITE CONFIGURATION — Awad Educational Academy
//
// Only VERIFIED information is filled in here. Anything marked
// with `confirmed: false` or left empty is a placeholder that
// the academy must confirm before it is published.
//
// To update the site later, edit the values in this file and in
// the content files under src/data/. Layout code does not need to
// change when content is added.
// ============================================================

// ------------------------------------------------------------
// SITE URL RESOLUTION
//
// The canonical/production domain is read from an environment
// variable so it can be changed in one place when the academy's
// final custom domain is connected — nothing is hardcoded.
//
//   • Set VITE_SITE_URL in a .env file (see .env.example), or
//   • Configure it in the Vercel project settings.
//
// Until a real domain is set, we fall back to the current Vercel
// deployment URL so canonical/OG/sitemap links still resolve.
// Trailing slashes are stripped for consistency.
// ------------------------------------------------------------
const FALLBACK_SITE_URL = "https://awad-educational-academy.vercel.app";

function resolveSiteUrl() {
  const fromEnv =
    typeof import.meta !== "undefined" && import.meta.env
      ? import.meta.env.VITE_SITE_URL
      : undefined;
  const raw = (fromEnv || FALLBACK_SITE_URL || "").trim();
  return raw.replace(/\/+$/, "");
}

export const SITE_URL = resolveSiteUrl();

export const siteConfig = {
  // --- BRAND (verified) ---
  name: "Awad Educational Academy",
  shortName: "AWAD",
  logo: "/logo.png",

  // Tagline / description — NOT yet provided by the academy.
  // A neutral, non-exaggerated placeholder is used until confirmed.
  tagline: "A professional educational institute in Kaij, Beed, Maharashtra.",
  taglineConfirmed: false,
  description:
    "Awad Educational Academy is an educational institute located in Kaij, Beed, Maharashtra.",
  descriptionConfirmed: false,

  // --- LOCATION (verified) ---
  city: "Kaij",
  district: "Beed",
  state: "Maharashtra",
  pin: "431123",
  address:
    "Ground Floor, Rangoli Dresses, Prof. Dr. Vithal Awad, Kaij–Sabla Road, Kaij, Beed, Maharashtra – 431123",

  // Google Maps — NOT yet provided by the academy.
  googleMapsUrl: "",
  googleMapsEmbed: "",

  // --- CONTACT ---
  phone: "+91 94221 05262", // verified
  phoneRaw: "+919422105262", // verified
  email: "", // TBP by academy
  workingHours: "", // TBP by academy

  // --- MESSAGING / SOCIAL (all TBP by academy) ---
  whatsapp: "", // digits only, e.g. "919422105262" — enable button only when confirmed
  whatsappMessage:
    "Hello! I would like to know more about the courses at Awad Educational Academy.",
  instagram: "",
  facebook: "",
  youtube: "",
  googleBusinessUrl: "",

  // --- PUBLIC LISTING RATINGS (context only — NOT to be shown as testimonials) ---
  publicRatings: [
    { source: "Google Business", value: "4.0/5", count: 14 },
    { source: "Justdial", value: "4.1/5", count: 16 },
  ],

  // --- SEO ---
  // Resolved from VITE_SITE_URL (falls back to the current Vercel URL).
  // Do NOT hardcode the final domain here — set it via the env var.
  siteUrl: SITE_URL,
  locale: "en_IN",
  ogImage: "/logo.png", // 1200x630 social preview recommended (see remaining items)
  ogImageAlt: "Awad Educational Academy — educational institute in Kaij, Beed, Maharashtra",
  twitterCard: "summary_large_image",

  // --- THEME (derived from logo) ---
  theme: {
    navy: "#0f2a52",
    azure: "#2196e8",
  },
};

// Helper flags so components can decide what to render
export const hasWhatsApp = Boolean(siteConfig.whatsapp);
export const hasEmail = Boolean(siteConfig.email);
export const hasMap = Boolean(siteConfig.googleMapsEmbed);

// ------------------------------------------------------------
// MAPS / DIRECTIONS
//
// These work from the verified address alone — no API key or
// place ID required. If the academy later provides an exact
// Google Maps place link, set `googleMapsUrl` (for the button)
// and/or `googleMapsEmbed` (for the iframe) and those take over.
// ------------------------------------------------------------
const mapsQuery = encodeURIComponent(`${siteConfig.name}, ${siteConfig.address}`);

/** Opens turn-by-turn directions to the academy from the user's location. */
export const directionsUrl =
  siteConfig.googleMapsUrl ||
  `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

/** A search-based embed so a map still shows before an exact place link is set. */
export const mapEmbedUrl =
  siteConfig.googleMapsEmbed ||
  `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

// ------------------------------------------------------------
// STRUCTURED DATA (JSON-LD) — verified information only.
//
// No ratings, reviews, opening hours, social profiles, courses,
// faculty, or achievements are added until the academy confirms
// them (see WEBSITE-SPECIFICATION.md §17 & §23).
// ------------------------------------------------------------

/** Postal address block reused by organization schema. */
export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress:
    "Ground Floor, Rangoli Dresses, Prof. Dr. Vithal Awad, Kaij–Sabla Road",
  addressLocality: siteConfig.city,
  addressRegion: siteConfig.state,
  postalCode: siteConfig.pin,
  addressCountry: "IN",
};

/**
 * EducationalOrganization schema. `sameAs` is added ONLY when the
 * academy confirms official social/business profiles.
 */
export function organizationJsonLd() {
  const sameAs = [
    siteConfig.googleBusinessUrl,
    siteConfig.instagram,
    siteConfig.facebook,
    siteConfig.youtube,
  ].filter(Boolean);

  const org = {
    "@type": "EducationalOrganization",
    "@id": siteConfig.siteUrl ? `${siteConfig.siteUrl}/#organization` : undefined,
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    url: siteConfig.siteUrl || undefined,
    logo: siteConfig.siteUrl
      ? `${siteConfig.siteUrl}${siteConfig.logo}`
      : undefined,
    image: siteConfig.siteUrl
      ? `${siteConfig.siteUrl}${siteConfig.ogImage}`
      : undefined,
    address: postalAddress,
  };
  if (sameAs.length) org.sameAs = sameAs;
  if (siteConfig.email) org.email = siteConfig.email;
  return org;
}

export default siteConfig;
