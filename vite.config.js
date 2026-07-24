import { defineConfig } from "vite";

// Static ScholarScope marketing site — public/install.html & privacy.html copy to dist
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
