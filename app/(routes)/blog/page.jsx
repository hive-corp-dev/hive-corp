import SubMv from "@/app/_components/pages/sub/sub-mv/sub-mv";
import styles from "./blog-archive-page.module.scss";
import Container from "@/app/_components/common/container/container";
import BlogCard from "@/app/_components/pages/blog-archive/blog-card/blog-card";
import { openSans } from "@/app/_utils/fonts";
import { allBlogPosts } from "content-collections";

export default async function BlogArchivePage() {
  return (
    <>
      <SubMv en="BLOG" jp="ブログ" />
      <div className={styles.wrap}>
        <Container className={styles.inner}>
          <main className={styles.main}>
            <section className={styles.archive}>
              <ul className={styles.list}>
                {allBlogPosts.map((post) => {
                  console.log(post);

                  const { title, description, thumbnail, publishedAt, _meta } = post;

                  return (
                    <li key={_meta.path} className={styles.item}>
                      <BlogCard
                        slug={_meta.path}
                        title={title}
                        description={description}
                        publishedAt={publishedAt}
                        thumbnail={thumbnail}
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          </main>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarBlock}>
              <div className={`${styles.sidebarTitle} ${openSans.className}`}>CATEGORY</div>
              <ul className={styles.catList}>
                <li>
                  ホームページ<span className={openSans.className}>5</span>
                </li>
                <li>
                  技術トピック<span className={openSans.className}>12</span>
                </li>
                <li>
                  SEO対策<span className={openSans.className}>4</span>
                </li>
                <li>
                  MEO対策<span className={openSans.className}>4</span>
                </li>
                <li>
                  SNS運用<span className={openSans.className}>1</span>
                </li>
              </ul>
            </div>
            <div className={styles.sidebarBlock}>
              <div className={`${styles.sidebarTitle} ${openSans.className}`}>KEYWORDS</div>
              <ul className={styles.tagList}>
                <li>Next.js</li>
                <li>Vercel</li>
                <li>Instagram</li>
                <li>WordPress</li>
                <li>LINE公式</li>
                <li>CMS</li>
                <li>Jamstack</li>
                <li>SNSマーケティング</li>
                <li>React</li>
                <li>Splide</li>
              </ul>
            </div>
          </aside>
        </Container>
      </div>
    </>
  );
}
