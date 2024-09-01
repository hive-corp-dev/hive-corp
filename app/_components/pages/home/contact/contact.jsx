import Container from "@/app/_components/common/container/container";
import styles from "./contact.module.scss";
import Form from "@/app/_components/common/form/form";
import SectionTitle from "@/app/_components/common/section-title/section-title";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="CONTACT" jp="お問い合わせ" />
        </h2>
        <p className={styles.intro}>
          制作の依頼やご質問などありましたら、お気軽にお問い合わせください。
          <br />
          2営業日以内にご返信いたします。
        </p>
        <div className={styles.content}>
          <Form />
        </div>
      </Container>
    </section>
  );
}
