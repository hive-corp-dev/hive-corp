import SubMv from "@/app/_components/pages/sub/sub-mv/sub-mv";
import styles from "../../blog-archive-page.module.scss";
import Container from "@/app/_components/common/container/container";
import BlogCard from "@/app/_components/pages/blog-archive/blog-card/blog-card";
import { openSans } from "@/app/_utils/fonts";
import { BLOG_CATEGORY_PATH, BLOG_TAG_PATH, BLOG_TAGS } from "@/app/_data/blog-data";
import { getTagLabelBySlug, getTagPath } from "@/app/_utils/blog";
import { postsSortedByDate } from "@/app/_utils/blog";
import BlogArchiveSidebar from "@/app/_components/pages/blog-archive/blog-archive-sidebar/blog-archive-sidebar";
import Breadcrumb from "@/app/_components/common/breadcrumb/breadcrumb";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { BLOG_ARCHIVE_METADATA } from "@/app/_data/metadata";

export async function generateStaticParams() {
  return BLOG_TAGS.map((tag) => ({
    slug: tag.slug,
  }));
}

export const generateMetadata = ({ params }) => {
  return outputMetadata(
    `${getTagLabelBySlug(params.slug)} - タグ | ブログ`,
    BLOG_ARCHIVE_METADATA.description,
    `${BLOG_TAG_PATH}${params.slug}`
  );
};

export default async function BlogArchivePage({ params }) {
  const tagPosts = postsSortedByDate.filter((post) => post.tags.includes(params.slug));

  return (
    <>
      <SubMv en="BLOG" jp="ブログ" />
      <div className={styles.wrap}>
        <Container className={styles.inner}>
          <main className={styles.main}>
            <section className={styles.archive}>
              <div className={styles.catTitle}>
                <span className={openSans.className}>TAG - </span>
                {getTagLabelBySlug(params.slug)}
              </div>
              <ul className={styles.list}>
                {tagPosts.map((post) => {
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
      <Breadcrumb paths={[{ name: "ブログ", slug: "/blog" }, { name: `タグ - ${getTagLabelBySlug(params.slug)}` }]} />
    </>
  );
}
