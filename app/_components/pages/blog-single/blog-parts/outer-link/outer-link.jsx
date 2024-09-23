import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "./outer-link.module.scss";

export default function OuterLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} <HiOutlineExternalLink className={styles.icon} />
    </a>
  );
}
