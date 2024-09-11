import { openSans } from "@/app/_utils/fonts";
import styles from "./blog-mv.module.scss";
import Container from "@/app/_components/common/container/container";
import { IoFolderOutline } from "react-icons/io5";
import { formatDate } from "@/app/_utils/date";
import { getCategoryLabelBySlug, getCategoryPath, getTagLabelBySlug, getTagPath } from "@/app/_utils/blog";
import { BsTags } from "react-icons/bs";
import Link from "next/link";

export default function BlogMv({ title, publishedAt, categorySlug, tagSlugs }) {
  const categoryLabel = getCategoryLabelBySlug(categorySlug);

  return (
    <section className={styles.mv}>
      <Container>
        <div className={styles.cat}>
          <Link href={getCategoryPath(categorySlug)} className={styles.catLink}>
            <IoFolderOutline />
            {categoryLabel}
          </Link>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.info}>
          <ul className={styles.tags}>
            {tagSlugs.map((slug) => (
              <li key={slug}>
                <Link href={getTagPath(slug)} className={styles.tagLink}>
                  <BsTags />
                  {getTagLabelBySlug(slug)}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`${styles.date} ${openSans.className}`}>{formatDate(publishedAt)}</div>
        </div>
      </Container>
    </section>
  );
}
