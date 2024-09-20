import { HIVE_URL } from "./_data/data";
import { allBlogPosts } from "@/.content-collections/generated";
import { BLOG_CATEGORIES, BLOG_TAGS } from "@/app/_data/blog-data";

export default function sitemap() {
  const home = {
    url: `${HIVE_URL}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  };

  const blogArchive = {
    url: `${HIVE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  };

  const blogCategories = BLOG_CATEGORIES.map((category) => {
    return {
      url: `${HIVE_URL}/blog/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const blogTags = BLOG_TAGS.map((tag) => {
    return {
      url: `${HIVE_URL}/blog/tag/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const blogPosts = allBlogPosts.map((post) => {
    return {
      url: `${HIVE_URL}/blog/${post._meta.path}`,
      lastModified: new Date(post.modifiedAt) || new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [home, blogArchive, ...blogCategories, ...blogTags, ...blogPosts];
}
