import { openSans } from "@/app/_utils/fonts";
import styles from "./thanks-page.module.scss";
import Container from "@/app/_components/common/container/container";
import { MAIL_ADDRESS } from "@/app/_data/data";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { THANKS_METADATA } from "@/app/_data/metadata";

export const metadata = outputMetadata(THANKS_METADATA.title, THANKS_METADATA.description, THANKS_METADATA.slug, {
  robots: {
    index: false,
  },
});

export default function ThanksPage() {
  return (
    <main className={styles.main}>
      <section className={styles.mv}>
        <h1 className={styles.title}>
          <span className={openSans.className}>THANK YOU</span>
          <span>お問い合わせ送信完了</span>
        </h1>
      </section>
      <section className={styles.thanks}>
        <Container>
          <h2>
            お問い合わせ
            <br />
            ありがとうございます
          </h2>
          <div className={styles.text}>
            <p>
              お問い合わせいただきありがとうございます。
              <br />
              2営業日以内に担当者からご連絡させていただきますので、しばらくお待ちくださいませ。
            </p>
            <p>
              万が一返信メールが届かない場合や担当者からの連絡が無い場合は、お手数ですが
              <span className={styles.mailWrap}>
                <a href={`mailto:${MAIL_ADDRESS}`} className={openSans.className}>
                  {MAIL_ADDRESS}
                </a>
              </span>
              に直接ご連絡ください。
            </p>
          </div>

          <div className={styles.btnWrap}>
            <a href="/" className={`${openSans.className} ${styles.btn}`}>
              HOME
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
