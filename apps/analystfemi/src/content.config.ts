import { defineCollection } from "astro:content";
import { blogSchema } from "@ja/ui/blog/schema";
import { promises as fs, readdirSync } from "node:fs";
import { relative } from "node:path";
import { fileURLToPath } from "node:url";

function blogLoader() {
  return {
    name: "analystfemi-blog-loader",
    load: async ({ config, logger, parseData, store, generateDigest, entryTypes }: any) => {
      const baseDir = new URL("./src/content/blog/", config.root);
      const basePath = fileURLToPath(baseDir);
      let entries: string[] = [];
      try {
        entries = readdirSync(basePath).filter((f) => f.endsWith(".md"));
      } catch (err: any) {
        logger.warn(`Could not read blog directory: ${err.message}`);
        return;
      }

      for (const entry of entries) {
        const fileUrl = new URL("./" + encodeURI(entry), baseDir);
        const contents = await fs.readFile(fileUrl, "utf-8");
        const ext = entry.split(".").at(-1);
        const entryType = entryTypes.get(`.${ext}`);
        if (!entryType) continue;

        const { body, data } = await entryType.getEntryInfo({ contents, fileUrl });
        const id = data.slug ? String(data.slug) : entry.replace(/\.md$/, "");
        const filePath = fileURLToPath(fileUrl);
        const rootPath = fileURLToPath(config.root);
        const relativePath = relative(rootPath, filePath).replace(/\\/g, "/");

        const parsedData = await parseData({ id, data, filePath });
        store.set({
          id,
          data: parsedData,
          body,
          filePath: relativePath,
          digest: generateDigest(contents),
          deferredRender: true,
        });
      }
    },
  };
}

export const collections = {
  blog: defineCollection({
    loader: blogLoader(),
    schema: blogSchema,
  }),
};
