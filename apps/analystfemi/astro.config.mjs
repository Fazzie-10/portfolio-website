import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://analystfemi.joshuaakintayo.me",
  server: { port: 4322 },
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
