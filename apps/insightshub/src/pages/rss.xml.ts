import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../data/blog";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: "InsightsHub blog",
    description: "Guides to SPSS, statistical tests, Chapter 4 and qualitative analysis for Nigerian BSc, HND and Masters students, by InsightsHub.",
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
    })),
  });
}
