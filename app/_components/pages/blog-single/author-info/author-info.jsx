import { AUTHORS } from "@/app/_data/author-data";
import styles from "./author-info.module.scss";
import { openSans } from "@/app/_utils/fonts";

export default function AuthorInfo({ authorId }) {
  const { nameEn, nameJp, position, description } = AUTHORS.find((author) => author.id === authorId);

  return (
    <div className={styles.box}>
      <div className={styles.head}>この記事を書いた人</div>
      <div className={styles.row}>
        <div className={styles.name}>
          <span className={styles.nameJp}>{nameJp}</span>
          <span className={`${styles.nameEn} ${openSans.className}`}>{nameEn}</span>
        </div>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
}
