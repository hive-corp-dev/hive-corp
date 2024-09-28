import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/_utils/date";
import styles from "./blog-card.module.scss";
import { openSans } from "@/app/_utils/fonts";
import { IoFolderOutline } from "react-icons/io5";
import { BsTags } from "react-icons/bs";
import { PiClock } from "react-icons/pi";

import { getCategoryLabelBySlug, getTagLabelBySlug } from "@/app/_utils/blog";

export default function BlogCard({ postData, isHorizontal }) {
  const {
    title,
    description,
    publishedAt,
    thumbnail,
    category,
    tags,
    _meta: { path },
  } = postData;

  return (
    <Link href={`/blog/${path}`} className={`${styles.link} ${isHorizontal && styles.isHorizontal}`}>
      <div className={styles.thumb}>
        <Image src={thumbnail} width={1600} height={900} alt={title} />
      </div>
      <div className={styles.body}>
        <div className={styles.info}>
          <div className={styles.cat}>
            <IoFolderOutline />
            {getCategoryLabelBySlug(category)}
          </div>
          <div className={`${styles.time} ${openSans.className}`}>
            <PiClock />
            {formatDate(publishedAt)}
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        {!isHorizontal && <p className={styles.desc}>{description}</p>}
        <ul className={styles.tagList}>
          {tags.map((tag) => (
            <li key={tag}>
              <div className={styles.tagLink}>
                <BsTags />
                {getTagLabelBySlug(tag)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
