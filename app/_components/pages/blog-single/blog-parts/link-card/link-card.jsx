import Link from "next/link";
import { allBlogPosts } from "@/.content-collections/generated";
import styles from "./link-card.module.scss";
import Image from "next/image";
import { getCategoryLabelBySlug } from "@/app/_utils/blog";
import { IoFolderOutline } from "react-icons/io5";

export default function LinkCard({ slug, isBlank, labelText }) {
  const post = allBlogPosts.find((post) => post._meta.path === slug);

  const { title, thumbnail, category, description, _meta } = post;

  // if the post doesn't exist, throw an error
  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  return (
    <Link href={`/blog/${_meta.path}`} target={isBlank && "_blank"} className={styles.card}>
      <div className={styles.label}>{labelText}</div>
      <div className={styles.thumb}>
        <Image src={thumbnail} alt={title} fill />
      </div>
      <div className={styles.content}>
        <div className={styles.category}>
          <IoFolderOutline />
          {getCategoryLabelBySlug(category)}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
      </div>
    </Link>
  );
}
