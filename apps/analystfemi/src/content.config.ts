import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { blogSchema } from "@ja/ui/blog/schema";

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: blogSchema,
  }),
};
