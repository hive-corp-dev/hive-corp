"use client";

import Link from "next/link";
import { useContext } from "react";
import { HamburgerMenuContext } from "@/app/_context/hamburger-menu-context";
import styles from "./hamburger-menu.module.scss";
import Image from "next/image";
import { openSans } from "@/app/_utils/fonts";
import { JAM_URL, CODEHIVE_URL } from "@/app/_data/data";

export default function HamburgerMenu() {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useContext(HamburgerMenuContext);

  const closeHamburgerMenu = () => {
    setHamburgerMenuIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className={`${styles.nav} ${hamburgerMenuIsOpen && styles.isOpen}`}>
      <div className={styles.inner}>
        <ul className={`${styles.list} ${openSans.className}`}>
          <li>
            <a href="/#business" onClick={closeHamburgerMenu}>
              <span>BUSINESS</span>
            </a>
          </li>
          <li>
            <a href="/#service" onClick={closeHamburgerMenu}>
              <span>SERVICE</span>
            </a>
          </li>
          <li>
            <a href="/#about" onClick={closeHamburgerMenu}>
              <span>ABOUT</span>
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={closeHamburgerMenu}>
              <span>CONTACT</span>
            </a>
          </li>
        </ul>

        <div className={styles.subLinkWrap}>
          <Link href="/privacy-policy" className={styles.subLink} onClick={closeHamburgerMenu}>
            PRIVACY POLICY
          </Link>
        </div>

        <div className={styles.bannerWrap}>
          <p className={styles.bannerText}>運営中のサービス</p>
          <ul className={styles.banners}>
            <li className={styles.banner}>
              <a href={`${JAM_URL}`} target="_blank" rel="noopener" className={styles.bannerLink}>
                <Image src="/images/jam-banner.png" alt="JAM banner" width={200} height={60} />
              </a>
            </li>
            <li className={styles.banner}>
              <a href={`${CODEHIVE_URL}`} target="_blank" rel="noopener" className={styles.bannerLink}>
                <Image src="/images/codehive-banner.png" alt="JAM banner" width={200} height={60} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.logo}>
          <Link href="/" onClick={closeHamburgerMenu}>
            <Image src="/images/logo-text-white.svg" width={140} height={33} alt="HIVE Logo" />
          </Link>
        </div>
        <p className={styles.catch}>
          ホームページ制作から集客まで
          <br />
          一貫してトータルサポート
        </p>

        <div className={styles.copy}>&copy; HIVE All Rights Reserved.</div>
      </div>
    </nav>
  );
}
