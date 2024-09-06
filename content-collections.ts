import { defineCollection, defineConfig } from "@content-collections/core";

const BlogPost = defineCollection({
  name: "BlogPost",
  directory: "app/_content/blog",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    thumbnail: z.preprocess((val) => {
      const defaultThumbnail = "/images/no-image.png"; // デフォルト画像のパス
      if (val === undefined || val === null) {
        return defaultThumbnail;
      }
      return val;
    }, z.string()),
    category: z.enum(["company", "engineering", "education", "customers"]),
    tags: z.array(z.enum(["technology", "news", "announcement", "event", "update"])),
    publishedAt: z.preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) {
        return new Date(arg); // 文字列またはDateオブジェクトをDateに変換
      }
    }, z.date()), // Dateオブジェクトとしてバリデーション
    author: z.enum(["tatsuya", "roku", "takumi"]),
  }),
});

export default defineConfig({
  collections: [BlogPost],
});
