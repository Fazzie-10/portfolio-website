import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://insightshub.joshuaakintayo.me",
  server: { port: 4324 },
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
