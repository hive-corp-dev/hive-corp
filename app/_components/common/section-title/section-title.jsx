import { openSans } from "@/app/_utils/fonts";
import styles from "./section-title.module.scss";

export default function SectionTitle({ en, jp }) {
  return (
    <>
      <span className={`${styles.en} ${openSans.className}`}>{en}</span>
      <span className={styles.jp}>{jp}</span>
    </>
  );
}
