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
            <span>ホームページ制作から集客まで</span>
            <span>一貫してトータルサポート</span>
          </h1>

          <Image className={styles.img} src="/images/mv.png" width={680} height={680} alt="" priority />

          <p className={styles.text}>
            Webサイトを作るだけでなく、成果を出すための
            <br />
            戦略的な集客サポートもお任せください。
            <br />
            一貫したサポートでビジネスの成長を後押しします。
          </p>

          <div className={styles.btns}>
            <a href="/#service" className={`${styles.btn} ${openSans.className}`}>
              SERVICE
            </a>
            <a href="/#contact" className={`${styles.btn} ${openSans.className}`}>
              CONTACT
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
