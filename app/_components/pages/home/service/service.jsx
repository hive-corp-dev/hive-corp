"use client";

import { useEffect, useContext, useRef } from "react";
import { HeaderContext } from "@/app/_context/header-context";
import Container from "@/app/_components/common/container/container";
import { openSans } from "@/app/_utils/fonts";
import styles from "./service.module.scss";
import Image from "next/image";
import SectionTitle from "@/app/_components/common/section-title/section-title";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

export default function Service() {
  const { setHeaderIsWhite } = useContext(HeaderContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerCallback = ([entry]) => {
      setHeaderIsWhite(entry.isIntersecting);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-1px 0px -100%",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElement = () => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    requestAnimationFrame(observeElement); // DOMがレンダリングされた後にオブザーバーを設定

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.section} id="service" ref={sectionRef}>
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="OUR SERVICE" jp="運営中のサービス" />
        </h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.head}>
              <span className={`${openSans.className} ${styles.num}`}>SERVICE 01</span>
              <span className={styles.name}>
                ECHive
                <br className={styles.brsp} />
                （イーシーハイブ）
              </span>
            </div>
            <p className={styles.subTitle}>ECサイト制作サービス</p>
            <div className={styles.thumb}>
              <Image src="/images/works-03.png" width={840} height={464} alt="" />
            </div>
            <div className={styles.exp}>
              <p>
                ECHive（イーシーハイブ）は、本格的なネットショップを開設&運営したい方に向けた、ECサイト制作サービスです。世界中で一番利用されているECサービス「Shopify」を使用し、デザイン性に優れた高機能なオリジナルECサイトを制作します。
                <br />
                制作して終わりではなく、公開後の運用サポート、SEO対策、集客支援なども行います。オリジナルテーマの開発や、アプリ開発も可能なので、幅広いニーズに合わせたECサイトを制作いたします。
              </p>
            </div>
            <div className={styles.btnWrap}>
              <a href="https://jam-factory.tech" target="_blank" rel="noopener" className={styles.btn}>
                Jam Factory
                <RxExternalLink />
              </a>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.head}>
              <span className={`${openSans.className} ${styles.num}`}>SERVICE 02</span>
              <span className={styles.name}>
                CodeHive
                <br className={styles.brsp} />
                （コードハイブ）
              </span>
            </div>
            <p className={styles.subTitle}>高品質なコーディング代行サービス</p>
            <div className={styles.thumb}>
              <Image src="/images/works-02.png" width={840} height={464} alt="CodeHive" />
            </div>
            <div className={styles.exp}>
              <p>
                CodeHiveは、高品質なコーディング代行サービスです。経験豊富なコーダーが完全内製で作業を完結し、レスポンシブ対応やWordPressの実装、アニメーション制作、Jamstackサイト開発など、幅広い技術に対応可能です。
                <br />
                コーダーのリソースが不足しているWeb制作会社・デザイン会社様や、コーディング作業を外部委託したい企業様におすすめのサービスです。
              </p>
            </div>
            <div className={styles.btnWrap}>
              <a href="https://codehive.jp" target="_blank" rel="noopener" className={styles.btn}>
                CodeHive
                <RxExternalLink />
              </a>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.head}>
              <span className={`${openSans.className} ${styles.num}`}>SERVICE 03</span>
              <span className={styles.name}>
                Jam Factory
                <br className={styles.brsp} />
                （ジャムファクトリー）
              </span>
            </div>
            <p className={styles.subTitle}>
              サブスクリプション型
              <br className={styles.brsp} />
              ホームページ制作サービス
            </p>
            <div className={styles.thumb}>
              <Image src="/images/works-01.png" width={840} height={464} alt="" />
            </div>
            <div className={styles.exp}>
              <p>
                Jam
                Factory（ジャムファクトリー）は、サブスクリプション型のホームページ制作サービスです。初期費用・制作費はすべて無料で、月額料金でホームページを制作し、運用までサポートいたします。お客様のビジネスに合わせたデザインを提案し、SEO対策も行い、集客につながるホームページを制作いたします。
                <br />
                ビジネスを立ち上げたばかりでホームページにお金をかけられない個人・小規模事業者様や、費用を抑えつつホームページを運用したい方におすすめのサービスです。
              </p>
            </div>
            <div className={styles.btnWrap}>
              <a href="https://jam-factory.tech" target="_blank" rel="noopener" className={styles.btn}>
                Jam Factory
                <RxExternalLink />
              </a>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
