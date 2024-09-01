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
              <Image src="/images/service-01.png" width={1200} height={1200} alt="" />
              <div className={styles.text}>
                <h3>ホームページ制作</h3>
                <p>
                  お客様のビジネスに合わせたデザインを提案し、
                  ホームページを制作いたします。デザインだけでなく、SEO対策も行い、
                  集客につながるホームページを制作いたします。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <Image src="/images/service-02.png" width={1200} height={1200} alt="" />
              <div className={styles.text}>
                <h3>SNS運用代行</h3>
                <p>
                  SNSを活用した集客やファン作りをサポートいたします。お客様のビジネスに合わせたSNS戦略を提案し、運用代行を行います。SNSを活用した集客やファン作りをサポートいたします。お客様のビジネスに合わせたSNS戦略を提案し、運用代行を行います。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
