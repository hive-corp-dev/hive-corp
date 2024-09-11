import { allBlogPosts } from "@/.content-collections/generated";
import { BLOG_CATEGORIES, BLOG_CATEGORY_PATH, BLOG_TAG_PATH, BLOG_TAGS } from "../_data/blog-data";

// 日付順に並べ替えられた投稿を取得
export const postsSortedByDate = allBlogPosts.sort((a, b) => {
  return new Date(b.publishedAt) - new Date(a.publishedAt);
});

// カテゴリーのslugからlabelを取得
export const getCategoryLabelBySlug = (slug) => {
  return BLOG_CATEGORIES.find((category) => category.slug === slug).label;
};

// タグのslugからlabelを取得
export const getTagLabelBySlug = (slug) => {
  return BLOG_TAGS.find((tag) => tag.slug === slug).label;
};

// カテゴリーの投稿数を取得
export const getPostCountByCategorySlug = (categorySlug) => {
  return allBlogPosts.filter((post) => post.category === categorySlug).length;
};

export const getCategoryPath = (slug) => {
  return `${BLOG_CATEGORY_PATH}${slug}`;
};

export const getTagPath = (slug) => {
  return `${BLOG_TAG_PATH}${slug}`;
};
