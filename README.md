# Joshua Akintayo — sites

One repo, three Astro sites sharing a design system (`packages/ui`).

| App | Local | Live (after deploy) |
|---|---|---|
| `apps/hub` | http://localhost:4321 | joshuaakintayo.me |
| `apps/analystfemi` | http://localhost:4322 | analystfemi.joshuaakintayo.me |
| `apps/automation` | http://localhost:4323 | automation.joshuaakintayo.me |

```bash
npm install
npm run dev          # all three sites
npm run dev:hub      # just one
```

Colours live in `packages/ui/src/styles/theme.css` (one light + one dark palette per site).
The WhatsApp number and site list live in `packages/ui/src/sites.ts`.

## Course payments (AnalystFemi)

Paid buttons ask for the buyer's Google email, then `apps/analystfemi/api/checkout.js` creates a Bachs checkout
(same Bachs account and pattern as rcpt). After payment Bachs calls `api/webhook.js`, which checks the signature,
product and amount, then shares the right Google Drive folder with that email.

- Vercel functions only run on the deployed site. `npm run dev` shows a "not available on this preview" message.
- Set the variables in `apps/analystfemi/.env.example` in Vercel, and add the webhook URL
  `https://analystfemi.joshuaakintayo.me/api/webhook` in the Bachs dashboard (events: `checkout.completed`).
- Products (created once, in Bachs): see `PRODUCTS` in `apps/analystfemi/api/_lib.js`. Launch prices are used until `LAUNCH_ENDS_ON`.

## Blog (AnalystFemi)

Each post is one Markdown file:

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
node scripts/preview.mjs --phone    # build all three exactly as they'll go live, serve on 4321-4323 (phone-friendly links)
node scripts/stress-test.mjs        # broken links/assets, SEO tags, alt text, page weight, external links
```

The report is written to `stress-test-report.md`. Other scripts: `scripts/process-media.sh` (videos/images),
`scripts/make-og.sh` (link-preview images).
