export type SiteId = "hub" | "analystfemi" | "automation" | "insightshub";

export interface Site {
  id: SiteId;
  name: string;
  tagline: string;
  devPort: number;
  domain: string;
}

export const SITES: Site[] = [
  { id: "hub", name: "Joshua Akintayo", tagline: "The story", devPort: 4321, domain: "joshuaakintayo.me" },
  { id: "analystfemi", name: "AnalystFemi", tagline: "Learn data analysis", devPort: 4322, domain: "analystfemi.joshuaakintayo.me" },
  { id: "automation", name: "Automation", tagline: "AI tools & automations", devPort: 4323, domain: "automation.joshuaakintayo.me" },
  { id: "insightshub", name: "InsightsHub", tagline: "Research & Chapter 4", devPort: 4324, domain: "insightshub.joshuaakintayo.me" },
];

export const WHATSAPP_NUMBER = "2349013506218";

// Set PUBLIC_LOCAL_HOST at build time (e.g. your Wi-Fi IP) to test a production build
// locally or on a phone, with the four sites linking to each other instead of the live domains.
const LOCAL_HOST = import.meta.env.PUBLIC_LOCAL_HOST as string | undefined;

export function siteUrl(id: SiteId, path = "/"): string {
  const site = SITES.find((s) => s.id === id)!;
  if (import.meta.env.DEV || LOCAL_HOST) return `http://${LOCAL_HOST ?? "localhost"}:${site.devPort}${path}`;
  return `https://${site.domain}${path}`;
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
