import { openSans } from "@/app/_utils/fonts";
import styles from "./blog-mv.module.scss";
import Container from "@/app/_components/common/container/container";
import { IoFolderOutline } from "react-icons/io5";
import { formatDate } from "@/app/_utils/date";
import { getCategoryBySlug } from "@/blog-posts";

export default function BlogMv({ title, publishDate, categorySlug }) {
  const category = getCategoryBySlug(categorySlug);

  return (
    <section className={styles.mv}>
      <Container>
        <div className={styles.cat}>
          <IoFolderOutline />
          {category.name}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.info}>
          <ul className={styles.tags}>
            <li>集客</li>
            <li>お役立ち情報</li>
          </ul>
          <div className={`${styles.date} ${openSans.className}`}>{formatDate(publishDate)}</div>
        </div>
      </Container>
    </section>
  );
}
