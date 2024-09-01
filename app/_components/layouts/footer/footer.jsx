import Link from "next/link";
import Container from "../../common/container/container";
import styles from "./footer.module.scss";
import { openSans } from "@/app/_utils/fonts";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container>
          <div className={styles.content}>
            <div className={styles.infoWrap}>
              <Link href="/" className={`${styles.logo} ${openSans.className}`}>
                HIVE
              </Link>
              <p className={styles.info}>
                ホームページ制作から集客まで
                <br />
                トータルサポート
              </p>
            </div>
            <nav className={styles.nav}>
              <ul className={`${styles.list} ${openSans.className}`}>
                <li>
                  <Link href="/#business">BUSINESS</Link>
                </li>
                <li>
                  <Link href="/#service">SERVICE</Link>
                </li>
                <li>
                  <Link href="/#about">ABOUT</Link>
                </li>
                <li>
                  <Link href="/#contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <p className={`${styles.copy} ${openSans.className}`}>&copy; HIVE All Rights Reserved.</p>
    </footer>
  );
}
