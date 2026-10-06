import { z } from "astro/zod";

// Frontmatter every blog post must have. Shared by every site's `blog` collection.
export const blogSchema = z.object({
  title: z.string().max(100),
  // Shown in Google results: aim for 140–160 characters
  description: z.string().min(50).max(170),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  draft: z.boolean().default(false),
  // WhatsApp call to action at the end of the post
  cta: z
    .object({
      title: z.string(),
      body: z.string(),
      label: z.string(),
      message: z.string(),
    })
    .optional(),
});

export type BlogFrontmatter = z.infer<typeof blogSchema>;

export function readingMinutes(body = ""): number {
  const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
