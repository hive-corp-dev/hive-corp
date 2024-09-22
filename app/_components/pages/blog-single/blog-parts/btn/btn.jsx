import Link from "next/link";
import styles from "./btn.module.scss";

export default function Btn({ isNextLink, href, children, type, ...props }) {
  let additionalClass = "";

  // typeに基づいてクラスを追加
  switch (type) {
    case "jam-factory":
      additionalClass = styles.isJam;
      break;
    default:
      break;
  }

  if (isNextLink) {
    return (
      <div className={styles.btnWrap}>
        <Link href={href} {...props} className={`${styles.btn} ${additionalClass}`}>
          {children}
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.btnWrap}>
        <a href={href} {...props} className={`${styles.btn} ${additionalClass}`}>
          {children}
        </a>
      </div>
    );
  }
}
