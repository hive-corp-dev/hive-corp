import { openSans } from "@/app/_utils/fonts";
import styles from "./blog-mv.module.scss";
import Container from "@/app/_components/common/container/container";
import { IoFolderOutline } from "react-icons/io5";
import { formatDate } from "@/app/_utils/date";
import { PiClock, PiClockClockwise } from "react-icons/pi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { FiChevronRight } from "react-icons/fi";
import { getCategoryLabelBySlug, getCategoryPath, getTagLabelBySlug, getTagPath } from "@/app/_utils/blog";
import { BsTags } from "react-icons/bs";
import Link from "next/link";

export default function BlogMv({ title, publishedAt, modifiedAt, categorySlug, tagSlugs }) {
  const categoryLabel = getCategoryLabelBySlug(categorySlug);

  return (
    <section className={styles.mv}>
      <Container>
        <div className={styles.parentLinks}>
          <div className={styles.blogArchive}>
            <Link href="/blog" className={styles.blogArchiveLink}>
              <HiOutlineArchiveBox />
              ブログ
            </Link>
          </div>
          <div className={styles.parentLinkArrow}>
            <FiChevronRight />
          </div>
          <div className={styles.cat}>
            <Link href={getCategoryPath(categorySlug)} className={styles.catLink}>
              <IoFolderOutline />
              {categoryLabel}
            </Link>
          </div>
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
          <div className={styles.dateWrap}>
            <div className={`${styles.date} ${openSans.className}`}>
              <PiClock />
              {formatDate(publishedAt)}
            </div>
            {modifiedAt && (
              <div className={`${styles.date} ${openSans.className}`}>
                <PiClockClockwise />
                {formatDate(modifiedAt)}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
