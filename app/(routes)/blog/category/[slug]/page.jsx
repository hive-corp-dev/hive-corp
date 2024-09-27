import SubMv from "@/app/_components/pages/sub/sub-mv/sub-mv";
import styles from "../../blog-archive-page.module.scss";
import Container from "@/app/_components/common/container/container";
import BlogCard from "@/app/_components/pages/blog-archive/blog-card/blog-card";
import { openSans } from "@/app/_utils/fonts";
import { BLOG_CATEGORIES } from "@/app/_data/blog-data";
import { getCategoryLabelBySlug, getCategoryPath, getCategoriesWithPosts } from "@/app/_utils/blog";
import { postsSortedByDate } from "@/app/_utils/blog";
import BlogArchiveSidebar from "@/app/_components/pages/blog-archive/blog-archive-sidebar/blog-archive-sidebar";
import Breadcrumb from "@/app/_components/common/breadcrumb/breadcrumb";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { BLOG_ARCHIVE_METADATA } from "@/app/_data/metadata";
import { BLOG_CATEGORY_PATH } from "@/app/_data/blog-data";

export const dynamicParams = false;

export async function generateStaticParams() {
  const categoriesWithPosts = getCategoriesWithPosts();

  return categoriesWithPosts.map((category) => ({
    slug: category.slug,
  }));
}

export const generateMetadata = ({ params }) => {
  return outputMetadata(
    `${getCategoryLabelBySlug(params.slug)} - カテゴリー | ブログ`,
    BLOG_ARCHIVE_METADATA.description,
    `${BLOG_CATEGORY_PATH}${params.slug}`
  );
};

export default async function BlogArchivePage({ params }) {
  const categoryPosts = postsSortedByDate.filter((post) => post.category === params.slug);

  return (
    <>
      <SubMv en="BLOG" jp="ブログ" />
      <div className={styles.wrap}>
        <Container className={styles.inner}>
          <main className={styles.main}>
            <section className={styles.archive}>
              <div className={styles.catTitle}>
                <span className={openSans.className}>CATEGORY - </span>
                {getCategoryLabelBySlug(params.slug)}
              </div>
              <ul className={styles.list}>
                {categoryPosts.map((post) => {
                  return (
                    <li key={post._meta.path} className={styles.item}>
                      <BlogCard postData={post} />
                    </li>
                  );
                })}
              </ul>
            </section>
          </main>
          <BlogArchiveSidebar />
        </Container>
      </div>
      <Breadcrumb
        paths={[{ name: "ブログ", slug: "/blog" }, { name: `カテゴリー - ${getCategoryLabelBySlug(params.slug)}` }]}
      />
    </>
  );
}
