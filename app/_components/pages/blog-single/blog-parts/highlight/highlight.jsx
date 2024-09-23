import styles from "./highlight.module.scss";

export default function Highlight({ children, type }) {
  const additionalClass = type === "warning" ? styles.warning : null;

  return <span className={`${styles.highlight} ${additionalClass}`}>{children}</span>;
}
