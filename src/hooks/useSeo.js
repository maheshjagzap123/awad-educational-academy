import { useEffect } from "react";
import siteConfig, { SITE_URL } from "../config/siteConfig";

/**
 * Lightweight, dependency-free SEO hook for this Vite + React SPA.
 *
 * On each route it keeps the document head in sync:
 *   • <title>
 *   • meta description
 *   • robots (index/noindex)
 *   • canonical <link>
 *   • Open Graph tags (title, description, type, url, image, site_name, locale)
 *   • Twitter/X card tags
 *   • per-page JSON-LD structured data (e.g. BreadcrumbList)
 *
 * Managed tags are marked with `data-managed-seo` so they can be
 * safely refreshed/removed between route changes without touching the
 * static tags shipped in index.html.
 */

const MANAGED = "data-managed-seo";

function upsertMeta(attr, key, content) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!content) {
    // Only remove tags we manage; never touch static index.html tags.
    if (el && el.hasAttribute(MANAGED)) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED, "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!href) return;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(MANAGED, "");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const base = SITE_URL || "";
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

function setJsonLd(id, data) {
  const existing = document.getElementById(id);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  let script = existing;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.setAttribute(MANAGED, "");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/**
 * Build a BreadcrumbList JSON-LD object from [{ name, path }] items.
 * The final item (current page) should omit `path` or pass its own path;
 * we still emit an `item` URL for every entry per schema.org guidance.
 */
function breadcrumbJsonLd(items) {
  if (!items || !items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path || "/"),
    })),
  };
}

export default function useSeo({
  title,
  description,
  path = "",
  type = "website",
  image,
  robots = "index, follow",
  breadcrumbs,
  jsonLd,
}) {
  useEffect(() => {
    const url = absoluteUrl(path || "/");
    const ogImage = absoluteUrl(image || siteConfig.ogImage);

    if (title) document.title = title;

    // Standard meta
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);

    // Canonical
    upsertLink("canonical", url);

    // Open Graph
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", siteConfig.ogImageAlt);
    upsertMeta("property", "og:site_name", siteConfig.name);
    upsertMeta("property", "og:locale", siteConfig.locale);

    // Twitter / X
    upsertMeta("name", "twitter:card", siteConfig.twitterCard || "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:image:alt", siteConfig.ogImageAlt);

    // Structured data: breadcrumbs + optional page-specific JSON-LD
    setJsonLd("ld-breadcrumbs", breadcrumbJsonLd(breadcrumbs));
    setJsonLd("ld-page", jsonLd || null);
  }, [title, description, path, type, image, robots, breadcrumbs, jsonLd]);
}
