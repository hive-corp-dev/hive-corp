import styles from "./browser-box.module.scss";

export default function BrowserBox({ children, name, hasNoPadding }) {
  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <div className={styles.dots}>
          <span></span>
        </div>
        {name && (
          <div className={styles.name}>
            <div className={styles.nameInner}>{name}</div>
          </div>
        )}
      </div>
      <div className={`${styles.content} ${hasNoPadding && styles.hasNoPadding}`}>{children}</div>
    </div>
  );
}
