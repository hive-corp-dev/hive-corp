import Container from "@/app/_components/common/container/container";
import SectionTitle from "@/app/_components/common/section-title/section-title";
import { openSans } from "@/app/_utils/fonts";
import { postsSortedByDate } from "@/app/_utils/blog";

import BlogCard from "@/app/_components/pages/blog-archive/blog-card/blog-card";

import styles from "./blog.module.scss";
import Link from "next/link";

export default function Blog() {
  // get first 3 posts
  const newPostsSortedByDate = postsSortedByDate.slice(0, 3);

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="BLOG" jp="ブログ" />
        </h2>

        <ul className={styles.list}>
          {newPostsSortedByDate.map((post) => {
            return (
              <li key={post._meta.path} className={styles.item}>
                <BlogCard postData={post} />
              </li>
            );
          })}
        </ul>

        <div className={styles.btnWrap}>
          <Link href="/blog" className={styles.btn}>
            BLOG
          </Link>
        </div>
      </Container>
    </section>
  );
}
