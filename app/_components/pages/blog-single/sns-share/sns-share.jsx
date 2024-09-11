import Image from "next/image";
import styles from "./sns-share.module.scss";
import { openSans } from "@/app/_utils/fonts";

export default function SnsShare({ postUrl, title }) {
  // remove https from the postUrl
  const urlForHatena = postUrl.replace("https://", "");

  return (
    <div className={styles.share}>
      <div className={`${styles.text} ${openSans.className}`}>SHARE</div>
      <ul className={styles.btns}>
        <li className={styles.btn}>
          <a
            href={`https://twitter.com/share?url=${postUrl}&text=${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.isX}`}
          >
            <Image src="/images/sns/icon-x-white.svg" width={24} height={24} alt="Xでシェア" />
          </a>
        </li>
        <li className={styles.btn}>
          <a
            href={`http://www.facebook.com/share.php?u=${postUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.isFb}`}
          >
            <Image src="/images/sns/icon-fb.svg" width={24} height={24} alt="Facebookでシェア" />
          </a>
        </li>
        <li className={styles.btn}>
          <a
            href={`https://social-plugins.line.me/lineit/share?url=${postUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.isLine}`}
          >
            <Image src="/images/sns/icons8-line.svg" width={24} height={24} alt="LINEでシェア" />
          </a>
        </li>
        <li className={styles.btn}>
          <a
            href={`https://b.hatena.ne.jp/entry/s/${urlForHatena}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.isHatena}`}
          >
            <Image src="/images/sns/icon-hb.svg" width={24} height={24} alt="はてなブックマークに登録" />
          </a>
        </li>
        <li className={styles.btn}>
          <a
            href={`https://getpocket.com/edit?url=${postUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.isPocket}`}
          >
            <Image src="/images/sns/icon-pocket.svg" width={24} height={24} alt="pocketに登録" />
          </a>
        </li>
      </ul>
    </div>
  );
}
