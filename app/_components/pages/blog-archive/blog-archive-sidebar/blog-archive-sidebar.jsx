import { openSans } from "@/app/_utils/fonts";
import { BsTags } from "react-icons/bs";
import { IoFolderOutline } from "react-icons/io5";
import Link from "next/link";
import styles from "./blog-archive-sidebar.module.scss";
import { BLOG_CATEGORIES } from "@/app/_data/blog-data";
import {
  getCategoryPath,
  getPostCountByCategorySlug,
  getTagPath,
  getTagsWithPosts,
  getCategoriesWithPosts,
} from "@/app/_utils/blog";

export default function BlogArchiveSidebar() {
  const categoriesWithPosts = getCategoriesWithPosts();
  const tagsWithPosts = getTagsWithPosts();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarBlock}>
        <div className={`${styles.sidebarTitle} ${openSans.className}`}>CATEGORY</div>
        <ul className={styles.catList}>
          {categoriesWithPosts.map((category) => {
            const count = getPostCountByCategorySlug(category.slug);

            return (
              <li key={category.slug}>
                <Link className={styles.catLink} href={getCategoryPath(category.slug)}>
                  <div className={styles.catName}>
                    <IoFolderOutline />
                    {category.label}
                  </div>
                  <span className={openSans.className}>{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${styles.sidebarBlock}`}>
        <div className={`${styles.sidebarTitle} ${openSans.className}`}>TAG</div>
        <ul className={styles.tagList}>
          {tagsWithPosts.map((tag) => (
            <li key={tag.slug}>
              <Link className={styles.tagLink} href={getTagPath(tag.slug)}>
                <BsTags />
                {tag.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
