// ============================================================
// STATIC PRERENDER — Awad Educational Academy
//
// Runs AFTER `vite build` (client) and `vite build --ssr` (server).
// For every indexable route it:
//   1. renders the React tree to an HTML string (server entry),
//   2. injects that markup into the #root div of the built shell,
//   3. builds a real, crawlable <head> from the SEO data the page's
//      useSeo() call captured during render (title, description,
//      canonical, robots, Open Graph, Twitter, JSON-LD),
//   4. writes dist/<route>/index.html.
//
// The result: Googlebot and non-JS crawlers get full content + correct
// per-page metadata, while the client hydrates the same markup.
// ============================================================

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");
const ssrEntry = resolve(distDir, "server/entry-server.js");

/**
 * Routes to prerender. Static routes mirror src/data/routes.js; the
 * course detail pages are expanded from confirmed courses. NotFound is
 * prerendered to a dedicated 404.html for hosts that support it.
 */
async function collectRoutes() {
  const { indexableRoutes } = await import(
    pathToFileURL(resolve(__dirname, "../src/data/routes.js")).href
  );
  const { courses } = await import(
    pathToFileURL(resolve(__dirname, "../src/data/content.js")).href
  );

  const routes = indexableRoutes.map((r) => r.path);

  // FAQ is indexable but may not yet be in routes.js — ensure it's covered.
  if (!routes.includes("/faq")) routes.push("/faq");

  // Confirmed course detail pages.
  for (const c of courses) {
    if (c && c.confirmed && c.slug) routes.push(`/courses/${c.slug}`);
  }

  return Array.from(new Set(routes));
}

function escapeAttr(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Build the managed <head> tags from captured SEO for one route. */
function buildHead(seo) {
  if (!seo) return "";
  const tags = [];
  const meta = (attr, key, content) => {
    if (!content) return;
    tags.push(`<meta ${attr}="${key}" content="${escapeAttr(content)}" data-prerender-seo />`);
  };

  if (seo.robots) meta("name", "robots", seo.robots);
  if (seo.description) meta("name", "description", seo.description);

  if (seo.canonical)
    tags.push(`<link rel="canonical" href="${escapeAttr(seo.canonical)}" data-prerender-seo />`);

  const og = seo.og || {};
  meta("property", "og:title", og.title);
  meta("property", "og:description", og.description);
  meta("property", "og:type", og.type);
  meta("property", "og:url", og.url);
  meta("property", "og:image", og.image);
  meta("property", "og:image:alt", og.imageAlt);
  meta("property", "og:site_name", og.siteName);
  meta("property", "og:locale", og.locale);

  const tw = seo.twitter || {};
  meta("name", "twitter:card", tw.card);
  meta("name", "twitter:title", tw.title);
  meta("name", "twitter:description", tw.description);
  meta("name", "twitter:image", tw.image);
  meta("name", "twitter:image:alt", tw.imageAlt);

  for (const block of seo.jsonLd || []) {
    if (!block) continue;
    tags.push(
      `<script type="application/ld+json" data-prerender-seo>${JSON.stringify(block)}</script>`
    );
  }

  return tags.join("\n    ");
}

/**
 * Remove the STATIC fallback head tags shipped in index.html for the
 * home page (title/description/robots/OG/Twitter/JSON-LD) so the
 * per-route prerendered tags are the single source of truth and we
 * don't emit duplicates. The icon/manifest/theme tags are kept.
 */
function stripStaticSeo(template) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/i, "__TITLE__")
    .replace(/<meta\s+name="description"[\s\S]*?\/>/i, "")
    .replace(/<meta\s+name="robots"[\s\S]*?\/>/i, "")
    .replace(/<meta\s+property="og:[^"]*"[\s\S]*?\/>/gi, "")
    .replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?\/>/gi, "")
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
      ""
    );
}

async function main() {
  const template = await readFile(resolve(distDir, "index.html"), "utf8");
  const cleaned = stripStaticSeo(template);

  const { render } = await import(pathToFileURL(ssrEntry).href);
  const routes = await collectRoutes();

  let count = 0;
  for (const route of routes) {
    const { html, seo } = render(route);
    const headTags = buildHead(seo);
    const title = seo && seo.title ? seo.title : "Awad Educational Academy";

    let page = cleaned
      .replace("__TITLE__", `<title>${escapeAttr(title)}</title>`)
      .replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
      .replace("</head>", `    ${headTags}\n  </head>`);

    // Output path: "/" -> dist/index.html, "/about" -> dist/about/index.html
    const outFile =
      route === "/"
        ? resolve(distDir, "index.html")
        : resolve(distDir, `.${route}`, "index.html");

    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, page, "utf8");
    count += 1;
  }

  // Prerender the 404 page to dist/404.html (Cloudflare/GitHub Pages use it).
  const { html: nfHtml, seo: nfSeo } = render("/this-route-does-not-exist");
  const nfPage = cleaned
    .replace("__TITLE__", `<title>${escapeAttr((nfSeo && nfSeo.title) || "Page Not Found")}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${nfHtml}</div>`)
    .replace("</head>", `    ${buildHead(nfSeo)}\n  </head>`);
  await writeFile(resolve(distDir, "404.html"), nfPage, "utf8");

  console.log(`[prerender] Wrote ${count} routes + 404.html to dist/`);
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
