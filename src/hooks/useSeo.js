import { useEffect } from "react";
import siteConfig from "../config/siteConfig";

/**
 * Lightweight SEO hook — sets the document <title>, meta description,
 * canonical URL, and Open Graph tags per page without extra deps.
 */
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function useSeo({ title, description, path = "" }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }
    if (title) {
      setMeta("property", "og:title", title);
      setMeta("property", "og:type", "website");
    }
    setMeta("property", "og:image", siteConfig.ogImage);

    if (siteConfig.siteUrl) {
      const url = `${siteConfig.siteUrl}${path}`;
      setCanonical(url);
      setMeta("property", "og:url", url);
    }
  }, [title, description, path]);
}
