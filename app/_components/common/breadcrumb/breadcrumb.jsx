import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import Container from "@/app/_components/common/container/container";
import styles from "./breadcrumb.module.scss";

export default function Breadcrumb({ paths }) {
  return (
    <div className={styles.wrap}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/" className={`${styles.link} ${styles.isHome}`}>
              <AiFillHome />
              <span>HOME</span>
            </Link>
            <FiChevronRight className={styles.arrow} />
          </li>

          {paths.map((path, i) => {
            const { name, slug } = path;
            if (slug) {
              return (
                <li className={styles.item} key={i}>
                  <Link href={slug} className={styles.link}>
                    <span className={styles.name}>{name}</span>
                  </Link>
                  {paths.length !== i + 1 && <FiChevronRight className={styles.arrow} />}
                </li>
              );
            } else {
              return (
                <li className={styles.item} key={i}>
                  <span className={styles.name}>{name}</span>
                  {paths.length !== i + 1 && <FiChevronRight className={styles.arrow} />}
                </li>
              );
            }
          })}
        </ul>
      </Container>
    </div>
  );
}
