import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
//
// A single config drives two builds:
//   • the normal client build (`vite build`)
//   • an SSR build (`vite build --ssr src/entry-server.jsx`) whose
//     output is used by scripts/prerender.mjs to generate static HTML.
//
// The SSR build is emitted to dist/server so the client dist stays clean.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {
        ssr: true,
        outDir: "dist/server",
        rollupOptions: {
          input: "src/entry-server.jsx",
          output: { entryFileNames: "entry-server.js" },
        },
      }
    : {},
}));
