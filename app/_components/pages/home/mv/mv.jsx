import Image from "next/image";
import Container from "@/app/_components/common/container/container";
import Link from "next/link";

import styles from "./mv.module.scss";
import { openSans } from "@/app/_utils/fonts";

export default function Mv() {
  return (
    <section className={styles.mv}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>私たちは、ホームページ制作から集客まで</span>
            <span>一貫してトータルサポートする</span>
            <span>Web制作会社です</span>
          </h1>

          <p className={styles.text}>
            Webサイトを作るだけでなく、成果を出すための
            <br />
            戦略的な集客サポートもお任せください。
            <br />
            一貫したサポートでビジネスの成長を後押しします。
          </p>

          <div className={styles.btns}>
            <Link href="/#service" className={`${styles.btn} ${openSans.className}`}>
              SERVICE
            </Link>
            <Link href="/#contact" className={`${styles.btn} ${openSans.className}`}>
              CONTACT
            </Link>
          </div>

          <Image className={styles.img} src="/images/mv-neww.png" width={1200} height={1200} alt="" />
        </div>
      </Container>
    </section>
  );
}
