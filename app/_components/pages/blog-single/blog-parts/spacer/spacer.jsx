import styles from "./spacer.module.scss";

export default function Spacer({ size }) {
  return <div className={`${styles.spacer} ${size && styles.size}`} aria-hidden={true}></div>;
}
