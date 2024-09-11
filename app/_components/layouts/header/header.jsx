"use client";

import Link from "next/link";
import Container from "../../common/container/container";
import styles from "./header.module.scss";
import { HeaderContext } from "@/app/_context/header-context";
import { HamburgerMenuContext } from "@/app/_context/hamburger-menu-context";

import { openSans } from "@/app/_utils/fonts";
import { useContext } from "react";
import Image from "next/image";

export default function Header() {
  const { headerIsWhite } = useContext(HeaderContext);
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useContext(HamburgerMenuContext);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuIsOpen((prev) => !prev);

    if (!hamburgerMenuIsOpen) {
      document.body.style.overflow = "hidden";
    }

    if (hamburgerMenuIsOpen) {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${headerIsWhite && styles.isWhite} ${
          hamburgerMenuIsOpen && styles.isHamburgerOpen
        }`}
      >
        <Container>
          <div className={styles.content}>
            <Link href="/" className={`${styles.logo} ${openSans.className}`}>
              <Image src="/images/logo-text.svg" width={140} height={33} alt="HIVE Logo" />
              <Image src="/images/logo-text-white.svg" width={140} height={33} alt="HIVE Logo" />
            </Link>
            <nav className={styles.nav}>
              <ul className={`${styles.list} ${openSans.className}`}>
                <li className={styles.item}>
                  <Link className={styles.link} href="/#business">
                    BUSINESS
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.link} href="/#service">
                    SERVICE
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.link} href="/#about">
                    ABOUT
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.link} href="/blog">
                    BLOG
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/#contact" className={styles.btn}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
      <button
        className={`${styles.hamburgerBtn} ${headerIsWhite && styles.isWhite} ${hamburgerMenuIsOpen && styles.isOpen}`}
        aria-label="ハンバーガーメニューを開閉する"
        type="button"
        onClick={toggleHamburgerMenu}
      ></button>
    </>
  );
}
