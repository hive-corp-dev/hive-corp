export const BLOG_CATEGORY_PATH = "/blog/category/";
export const BLOG_TAG_PATH = "/blog/tag/";

export const BLOG_CATEGORIES = [
  { slug: "website", label: "ホームページ" },
  { slug: "tech-topics", label: "技術トピック" },
  // { slug: "seo", label: "SEO対策" },
  // { slug: "meo", label: "MEO対策" },
  // { slug: "sns", label: "SNS運用" },
];

// 並べ替えは手動で行う
// content-collections.tsにも追記する
export const BLOG_TAGS = [
  { slug: "useful-info", label: "お役立ち情報" },
  { slug: "coconala", label: "ココナラ" },
  { slug: "subscription", label: "サブスク" },
  { slug: "marketing", label: "マーケティング" },
  { slug: "analytics-tool", label: "分析ツール" },
  { slug: "cms", label: "CMS" },
  { slug: "css", label: "CSS" },
  { slug: "google-analytics", label: "Google Analytics" },
  { slug: "jamstack", label: "Jamstack" },
  { slug: "microsoft-clarity", label: "Microsoft Clarity" },
  { slug: "nextjs", label: "Next.js" },
  { slug: "seo", label: "SEO" },
  { slug: "wordpress", label: "WordPress" },
];

export const BLOG_CATEGORY_SLUGS = BLOG_CATEGORIES.map((category) => category.slug);
export const BLOG_TAG_SLUGS = BLOG_TAGS.map((tag) => tag.slug);
