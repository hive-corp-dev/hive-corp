import Content, { metadata as frontmatter } from "./benefits-of-having-a-website.mdx";
import { outputMetadataForBlogPost } from "@/app/_utils/outputMetadata";
import BlogHead from "@/app/_components/pages/blog-single/blog-head/blog-head";
import UserContent from "@/app/_components/pages/blog-single/user-content/user-content";
import Container from "@/app/_components/common/container/container";
import { openSans } from "@/app/_utils/fonts";
import BlogMv from "@/app/_components/pages/blog-single/blog-mv/blog-mv";
import styles from "../blog-single-layout.module.scss";

export const metadata = outputMetadataForBlogPost(
  frontmatter.title,
  null,
  `/blog/${frontmatter.slug}`,
  frontmatter.thumbnail
);

export default function Page() {
  const { title, description, thumbnail, publishDate, categorySlug } = frontmatter;

  return (
    <div>
      <BlogMv title={title} categorySlug={categorySlug} publishDate={publishDate} />
      <div className={styles.wrap}>
        <Container className={styles.inner}>
          <main className={styles.main}>
            <BlogHead title={title} thumbnail={thumbnail} />
            <UserContent>
              <Content />
            </UserContent>
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
    </div>
  );
}
