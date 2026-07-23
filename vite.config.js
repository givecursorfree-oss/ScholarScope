import { defineConfig } from "vite";

// Exact ScholarScope HTML (static index.html)
export default defineConfig({
  root: ".",
  publicDir: "public",
  server: {
    open: "/",
    port: 5173,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
