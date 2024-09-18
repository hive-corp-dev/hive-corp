export const BLOG_CATEGORY_PATH = "/blog/category/";
export const BLOG_TAG_PATH = "/blog/tag/";

export const BLOG_CATEGORIES = [
  { slug: "website", label: "ホームページ" },
  // { slug: "tech-topics", label: "技術トピック" },
  // { slug: "seo", label: "SEO対策" },
  // { slug: "meo", label: "MEO対策" },
  // { slug: "sns", label: "SNS運用" },
];

// 並べ替えは手動で行う
export const BLOG_TAGS = [
  { slug: "useful-info", label: "お役立ち情報" },
  { slug: "marketing", label: "マーケティング" },
  { slug: "jamstack", label: "Jamstack" },
];

export const BLOG_CATEGORY_SLUGS = BLOG_CATEGORIES.map((category) => category.slug);
export const BLOG_TAG_SLUGS = BLOG_TAGS.map((tag) => tag.slug);
