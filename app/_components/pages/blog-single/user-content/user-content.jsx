import styles from "./user-content.module.scss";

export default function UserContent({ children }) {
  return <div className={styles.content}>{children}</div>;
}
