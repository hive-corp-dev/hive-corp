import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { BLOG_CATEGORY_SLUGS, BLOG_TAG_SLUGS } from "./app/_data/blog-data";
import rehypeSlug from "rehype-slug";

const BlogPost = defineCollection({
  name: "BlogPost",
  directory: "app/_content/blog",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    thumbnail: z.preprocess((val) => {
      const defaultThumbnail = "/images/no-image.png"; // デフォルト画像のパス
      if (val === undefined || val === null || val === "") {
        return defaultThumbnail;
      }
      return val;
    }, z.string()),
    category: z.enum(["website"]),
    tags: z.array(z.enum(["useful-info", "marketing"])),
    publishedAt: z.preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) {
        return new Date(arg); // 文字列またはDateオブジェクトをDateに変換
      }
    }, z.date()), // Dateオブジェクトとしてバリデーション
    author: z.enum(["tatsuya", "roku", "takumi"]),
  }),
  transform: async (document, context) => {
    // documentでエラー出てたのでchatgptで解決
    const completeDocument = {
      ...document,
      content: document.content || "", // content プロパティを追加
    };

    const mdx = await compileMDX(context, completeDocument, {
      rehypePlugins: [rehypeSlug],
    });

    return {
      ...document,
      mdx,
    };

    // const mdx = await compileMDX(context, document, {
    //   rehypePlugins: [rehypeSlug],
    // });
    // return {
    //   ...document,
    //   mdx,
    // };
  },
});

export default defineConfig({
  collections: [BlogPost],
});
