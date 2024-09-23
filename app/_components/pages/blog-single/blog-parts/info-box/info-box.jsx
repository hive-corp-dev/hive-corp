import { BsInfoCircleFill } from "react-icons/bs";
import styles from "./info-box.module.scss";

export default function Box({ type, children }) {
  const boxClass = type === "warning" ? styles.isWarning : type === "success" ? styles.isSuccess : null;

  return (
    <div className={`${styles.box} ${boxClass}`}>
      <div className={styles.icon}>
        <BsInfoCircleFill />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
