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
  siteUrl: "", // set to final domain when available
  ogImage: "/logo.png",

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

export default siteConfig;
