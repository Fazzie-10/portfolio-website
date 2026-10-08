import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://joshuaakintayo.me",
  server: { port: 4321 },
  integrations: [sitemap({ filter: (page) => !page.includes("/moodboard") })],
  vite: { plugins: [tailwindcss()] },
});
