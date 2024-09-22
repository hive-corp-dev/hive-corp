import Link from "next/link";
import Container from "../../common/container/container";
import styles from "./footer.module.scss";
import { openSans } from "@/app/_utils/fonts";
import Image from "next/image";
import { CODEHIVE_URL, JAM_URL } from "@/app/_data/data";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container>
          <div className={styles.content}>
            <div className={styles.infoWrap}>
              <Link href="/" className={`${styles.logo} ${openSans.className}`}>
                <Image src="/images/logo-text-white.svg" width={140} height={33} alt="HIVE Logo" />
              </Link>

              <p className={styles.catch}>
                ホームページ制作から集客まで
                <br />
                一貫してトータルサポート
              </p>
            </div>
            <nav className={styles.nav}>
              <ul className={`${styles.list} ${openSans.className}`}>
                <li>
                  <Link className={styles.link} href="/#business">
                    BUSINESS
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/#service">
                    SERVICE
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/#about">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/blog">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/#contact">
                    CONTACT
                  </Link>
                </li>
              </ul>

              <div className={styles.subLinkWrap}>
                <Link href="/privacy-policy" className={styles.subLink}>
                  PRIVACY POLICY
                </Link>
              </div>
            </nav>
          </div>

          <div className={styles.subContent}>
            <div className={styles.bannerWrap}>
              <p className={styles.bannerHead}>運営中のサービス</p>
              <div className={styles.banners}>
                <a href={`${CODEHIVE_URL}`} target="_blank" rel="noopener" className={styles.banner}>
                  <span className={styles.bannerText}>コーディング代行サービス</span>
                  <Image
                    className={styles.bannerImg}
                    src="/images/codehive-banner.png"
                    alt="CodeHive"
                    width={200}
                    height={60}
                  />
                </a>
                <a href={`${JAM_URL}`} target="_blank" rel="noopener" className={styles.banner}>
                  <span className={styles.bannerText}>サブスク型ホームページ制作サービス</span>
                  <Image
                    className={styles.bannerImg}
                    src="/images/jam-banner.png"
                    alt="Jam Factory"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <p className={`${styles.copy} ${openSans.className}`}>&copy; HIVE All Rights Reserved.</p>
    </footer>
  );
}
