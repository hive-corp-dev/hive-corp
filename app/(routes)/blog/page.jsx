import SubMv from "@/app/_components/pages/sub/sub-mv/sub-mv";
import styles from "./blog-archive-page.module.scss";
import Container from "@/app/_components/common/container/container";
import BlogCard from "@/app/_components/pages/blog-archive/blog-card/blog-card";
import { openSans } from "@/app/_utils/fonts";
import { allBlogPosts } from "content-collections";
import { postsSortedByDate } from "@/app/_utils/blog";
import BlogArchiveSidebar from "@/app/_components/pages/blog-archive/blog-archive-sidebar/blog-archive-sidebar";
import Breadcrumb from "@/app/_components/common/breadcrumb/breadcrumb";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { BLOG_ARCHIVE_METADATA } from "@/app/_data/metadata";

export const metadata = outputMetadata(
  BLOG_ARCHIVE_METADATA.title,
  BLOG_ARCHIVE_METADATA.description,
  BLOG_ARCHIVE_METADATA.slug
);

export default async function BlogArchivePage() {
  return (
    <>
      <SubMv en="BLOG" jp="ブログ" />
      <div className={styles.wrap}>
        <Container className={styles.inner}>
          <main className={styles.main}>
            <section className={styles.archive}>
              <div className={styles.catTitle}>全カテゴリーの記事</div>
              <ul className={styles.list}>
                {postsSortedByDate.map((post) => {
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
      <Breadcrumb paths={[{ name: "ブログ" }]} />
    </>
  );
}
