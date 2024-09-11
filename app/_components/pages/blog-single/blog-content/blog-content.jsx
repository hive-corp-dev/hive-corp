import styles from "./blog-content.module.scss";

export default function BlogContent({ children }) {
  return <div className={styles.content}>{children}</div>;
}
