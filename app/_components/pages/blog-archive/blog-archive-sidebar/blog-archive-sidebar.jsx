import { openSans } from "@/app/_utils/fonts";
import { BsTags } from "react-icons/bs";
import { IoFolderOutline } from "react-icons/io5";
import Link from "next/link";
import styles from "./blog-archive-sidebar.module.scss";
import { BLOG_CATEGORIES, BLOG_TAGS } from "@/app/_data/blog-data";
import { getCategoryPath, getPostCountByCategorySlug, getTagPath } from "@/app/_utils/blog";

export default function BlogArchiveSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarBlock}>
        <div className={`${styles.sidebarTitle} ${openSans.className}`}>CATEGORY</div>
        <ul className={styles.catList}>
          {BLOG_CATEGORIES.map((category) => {
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

          {/* <li>
            <div className={styles.catName}>
              <IoFolderOutline />
              技術トピック
            </div>
            <span className={openSans.className}>12</span>
          </li>
          <li>
            <div className={styles.catName}>
              <IoFolderOutline />
              SEO対策
            </div>
            <span className={openSans.className}>4</span>
          </li>
          <li>
            <div className={styles.catName}>
              <IoFolderOutline />
              MEO対策
            </div>
            <span className={openSans.className}>4</span>
          </li>
          <li>
            <div className={styles.catName}>
              <IoFolderOutline />
              SNS運用
            </div>
            <span className={openSans.className}>1</span>
          </li> */}
        </ul>
      </div>
      <div className={`${styles.sidebarBlock}`}>
        <div className={`${styles.sidebarTitle} ${openSans.className}`}>TAG</div>
        <ul className={styles.tagList}>
          {BLOG_TAGS.map((tag) => (
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
