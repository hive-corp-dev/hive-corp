import { readdir } from "fs/promises";
import path from "path";
import { BLOG_CATEGORIES } from "./app/_data/blog-data";

// 記事リストを取得する関数
export async function getPosts() {
  const blogPath = path.resolve(process.cwd(), "./app/(blog-posts)/blog");

  // Retrieve slugs from post routes
  const slugs = (await readdir(blogPath, { withFileTypes: true })).filter((dirent) => dirent.isDirectory());

  // // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/(blog-posts)/blog/${name}/${name}.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

// カテゴリーslugからカテゴリー情報を取得する関数
export const getCategoryBySlug = (slug) => {
  return BLOG_CATEGORIES.find((category) => category.slug === slug);
};
