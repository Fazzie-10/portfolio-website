# Joshua Akintayo — sites

One repo, four Astro sites sharing a design system (`packages/ui`).

| App | Local | Live (after deploy) |
|---|---|---|
| `apps/hub` | http://localhost:4321 | joshuaakintayo.me |
| `apps/analystfemi` | http://localhost:4322 | analystfemi.joshuaakintayo.me |
| `apps/automation` | http://localhost:4323 | automation.joshuaakintayo.me |
| `apps/insightshub` | http://localhost:4324 | insightshub.joshuaakintayo.me |

```bash
npm install
npm run dev          # all four sites
npm run dev:hub      # just one
```

Colours live in `packages/ui/src/styles/theme.css` (one light + one dark palette per site).
The WhatsApp number and site list live in `packages/ui/src/sites.ts`.

## Blog (InsightsHub and AnalystFemi)

Each post is one Markdown file:

- InsightsHub: `apps/insightshub/src/content/blog/`
- AnalystFemi: `apps/analystfemi/src/content/blog/`

The file name becomes the URL (`which-statistical-test-should-i-use.md` → `/blog/which-statistical-test-should-i-use/`).
Start every post with this frontmatter:

```yaml
---
title: "Under ~60 characters, with the phrase people search for"
description: "140–160 characters. This is what Google shows under the title."
pubDate: 2026-10-06
tags: ["Excel", "Formulas"]
cover: "/media/some-image.webp"   # optional, put the image in the app's public/media
draft: true                      # optional: shows locally, hidden on the live site
cta:                             # optional WhatsApp box at the end
  title: "Heading"
  body: "One or two sentences."
  label: "Button text"
  message: "Pre-filled WhatsApp message"
---
```

Sitemaps (`/sitemap-index.xml`), RSS (`/rss.xml`) and `robots.txt` are generated automatically.
After deploying, submit each site's sitemap in Google Search Console.

## Testing before deploy

```bash
node scripts/preview.mjs --phone    # build all four exactly as they'll go live, serve on 4321-4324 (phone-friendly links)
node scripts/stress-test.mjs        # broken links/assets, SEO tags, alt text, page weight, external links
```

The report is written to `stress-test-report.md`. Other scripts: `scripts/process-media.sh` (videos/images),
`scripts/make-og.sh` (link-preview images).
