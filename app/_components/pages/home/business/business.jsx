import { openSans } from "@/app/_utils/fonts";
import styles from "./business.module.scss";
import Container from "@/app/_components/common/container/container";
import Image from "next/image";
import SectionTitle from "@/app/_components/common/section-title/section-title";

export default function Business() {
  return (
    <section className={styles.section} id="business">
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="OUR BUSINESS" jp="事業内容" />
        </h2>

        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.thumb}>
                <Image src="/images/service-01.png" width={1200} height={1200} alt="" />
              </div>
              <div className={styles.text}>
                <h3>ホームページ制作 / ECサイト制作</h3>
                <p>
                  顧客の目的や業種に合わせて、企業やブランドの魅力を最大限に引き出すホームページやECサイトを制作します。デザイン性と機能性を高次元で両立させ、ユーザーが直感的に操作できる導線設計と、必要な情報へスムーズにアクセスできる構造を重視。さらに、SEO対策を施したコンテンツ設計やページ構成により、検索エンジンでの上位表示を狙い、集客や売上向上へとつなげます。
                  <br />
                  コーポレートサイトから商品販売に特化したECサイトまで、幅広いニーズに柔軟に対応し、成果につながるサイトをご提供します。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.thumb}>
                <Image src="/images/service-02.png" width={1200} height={1200} alt="" />
              </div>
              <div className={styles.text}>
                <h3>MEO対策</h3>
                <p>
                  地域に根ざした集客戦略として、Googleマップでの上位表示を目指すMEO（Map Engine
                  Optimization）対策を実施します。店舗情報の最適化や、顧客レビューの管理、ローカルSEOの施策で、近隣のユーザーに効率的にリーチし、集客力を強化します。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.thumb}>
                <Image src="/images/service-ig.png" width={1200} height={1200} alt="" />
              </div>
              <div className={styles.text}>
                <h3>Instagram運用代行</h3>
                <p>
                  Instagramを活用して、ターゲットに合わせた投稿内容の企画から、フォロワーの増加やエンゲージメント向上を図ります。写真や動画の制作、ハッシュタグ戦略、広告運用などの多角的なアプローチでブランド価値を高め、顧客の獲得を支援します。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.thumb}>
                <Image src="/images/service-line.png" width={1200} height={1200} alt="" />
              </div>
              <div className={styles.text}>
                <h3>LINE公式構築代行</h3>
                <p>
                  LINE公式アカウントの開設から効果的な運用までをトータルサポートします。メッセージ配信の最適化や、自動応答システムの設定、クーポン配布のサポートにより、顧客との接点を強化し、リピーターの増加を目指します。カスタマイズされた運用プランで、ビジネス目標達成に貢献します。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
