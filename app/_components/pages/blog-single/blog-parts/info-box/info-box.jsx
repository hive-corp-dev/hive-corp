import { BsInfoCircleFill } from "react-icons/bs";
import { PiWarningCircleFill } from "react-icons/pi";
import { FaThumbsUp } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";
import styles from "./info-box.module.scss";

const icons = {
  infoCircle: (
    <div className={`${styles.icon} ${styles.isInfoCircle}`}>
      <BsInfoCircleFill />
    </div>
  ),
  warning: (
    <div className={`${styles.icon} ${styles.isWarning}`}>
      <PiWarningFill />
    </div>
  ),
  thumbsUp: (
    <div className={`${styles.icon} ${styles.isThumbsUp}`}>
      <FaThumbsUp />
    </div>
  ),
};

export default function Box({ type, icon, title, children }) {
  const boxClass =
    {
      warning: styles.isWarning,
      success: styles.isSuccess,
      good: styles.isGood,
    }[type] || null;

  const IconElement = icons[icon] || icons.infoCircle;

  return (
    <div className={`${styles.box} ${boxClass}`}>
      {IconElement}
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
