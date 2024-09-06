import { openSans } from "@/app/_utils/fonts";
import styles from "./sub-mv.module.scss";

export default function SubMv({ en, jp }) {
  return (
    <section className={styles.mv}>
      <h1 className={styles.title}>
        <span className={openSans.className}>{en}</span>
        <span>{jp}</span>
      </h1>
    </section>
  );
}
