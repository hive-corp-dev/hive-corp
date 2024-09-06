import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/_utils/date";
import styles from "./blog-card.module.scss";
import { openSans } from "@/app/_utils/fonts";

export default function BlogCard({ slug, title, description, publishedAt, thumbnail }) {
  return (
    <Link href={`/blog/${slug}`} className={styles.link}>
      <Image className={styles.thumb} src={thumbnail} width={1600} height={900} alt={title} />
      <div className={styles.body}>
        <div className={`${styles.time} ${openSans.className}`}>{formatDate(publishedAt)}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
      </div>
    </Link>
  );
}
