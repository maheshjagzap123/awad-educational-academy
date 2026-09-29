import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { setSeoCollector } from "./hooks/useSeo";

/**
 * Server entry used by scripts/prerender.mjs.
 *
 * Renders a single route to an HTML string and returns the SEO data
 * that the page's useSeo() call captured during render, so the
 * prerender script can build a real, crawlable <head>.
 */
export function render(url) {
  let seo = null;
  // The LAST useSeo() call during a render wins (pages call it once).
  setSeoCollector((resolved) => {
    seo = resolved;
  });

  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

  setSeoCollector(null);
  return { html, seo };
}
