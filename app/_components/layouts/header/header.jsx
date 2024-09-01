"use client";

import Link from "next/link";
import Container from "../../common/container/container";
import styles from "./header.module.scss";
import { HeaderContext } from "@/app/_context/header-context";
import { openSans } from "@/app/_utils/fonts";
import { useContext } from "react";
import Image from "next/image";

export default function Header() {
  const { headerIsWhite } = useContext(HeaderContext);

  return (
    <header className={`${styles.header} ${headerIsWhite && styles.isWhite}`}>
      <Container>
        <div className={styles.content}>
          <Link href="/" className={`${styles.logo} ${openSans.className}`}>
            <Image src="/images/logo-07.svg" width={80} height={80} alt="logo" />
            HIVE
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
                <Link href="/#contact" className={styles.btn}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
