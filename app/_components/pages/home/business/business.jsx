import styles from "./business.module.scss";
import Container from "@/app/_components/common/container/container";
import Image from "next/image";
import SectionTitle from "@/app/_components/common/section-title/section-title";

export default function Business() {
  return (
    <section className={styles.section} id="business">
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="OUR BUSINESS" jp="私たちができること" />
        </h2>

        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.thumb}>
                <Image src="/images/service-01.png" width={1200} height={1200} alt="" />
              </div>
              <div className={styles.text}>
                <h3>ホームページ・ウェブサイト制作</h3>
                <p>
                  ホームページ・ウェブサイトを開設したいというお客様の目的や業種に合わせて、企業やブランドの魅力を最大限に引き出すウェブサイトを制作します。
                  <br />
                  長年の受託制作を通じて培った経験や知識を活かし、ユーザーが直感的に操作できる導線設計と、必要な情報へスムーズにアクセスできる構造を重視したサイトを制作します。
                  <br />
                  ランディングページからコーポレートサイトまで柔軟に対応し、お客様のビジネス立ち上げや成長を支援します。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.thumb}>
                <Image src="/images/service-02.png" width={1200} height={1200} alt="" />
              </div>
              <div className={styles.text}>
                <h3>ECサイト(Shopify)制作</h3>
                <p>
                  Shopifyを使用したECサイトを制作します。
                  <br />
                  商品管理から決済処理、在庫管理まで、EC運営に必要な機能を包括的にカバーし、お客様のビジネス成長を支援します。
                  <br />
                  モバイルファーストのレスポンシブデザインと直感的なユーザーインターフェースで、購入率の向上と顧客体験の最適化を実現します。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.thumb}>
                <Image src="/images/service-ig.png" width={1200} height={1200} alt="" />
              </div>
              <div className={styles.text}>
                <h3>ウェブサイト実装（フロントエンド）受託制作</h3>
                <p>
                  FigmaやXDなどでデザインされたウェブサイトのフロントエンドの実装を行います。
                  <br />
                  表示速度の最適化やアクセシビリティに配慮したコーディングから、JavaScriptやWebGLを使用したリッチな演出を含むウェブサイトまで幅広いニーズに対応することが可能です。                   
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
