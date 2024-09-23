import Image from "next/image";
import styles from "./next-image.module.scss";

export default function NextImage({ src, alt, caption, width, height, hasBorder, hasShadow, children, ...props }) {
  return (
    <figure className={`${styles.figure}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${styles.img}
        ${hasBorder && styles.img_border}
        ${hasShadow && styles.img_shadow}`}
        {...props}
      />

      {children && <figcaption className={styles.caption}>{children}</figcaption>}
    </figure>
  );
}
