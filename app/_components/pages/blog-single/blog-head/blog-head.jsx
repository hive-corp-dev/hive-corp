import Image from "next/image";
import styles from "./blog-head.module.scss";

export default function BlogHead({ title, thumbnail }) {
  return (
    <div className={styles.mv}>
      <Image className={styles.thumb} src={thumbnail} alt={title} width={1600} height={900} />
    </div>
  );
}
