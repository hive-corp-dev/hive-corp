import Link from "next/link";
import styles from "./btn.module.scss";

export default function Btn({ isNextLink, href, children, ...props }) {
  if (isNextLink) {
    return (
      <div className={styles.btnWrap}>
        <Link href={href} {...props} className={styles.btn}>
          {children}
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.btnWrap}>
        <a href={href} {...props} className={styles.btn}>
          {children}
        </a>
      </div>
    );
  }
}
