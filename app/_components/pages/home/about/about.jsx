import Container from "@/app/_components/common/container/container";
import styles from "./about.module.scss";
import { openSans } from "@/app/_utils/fonts";
import SectionTitle from "@/app/_components/common/section-title/section-title";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <Container>
        <h2 className={styles.title}>
          <SectionTitle en="ABOUT" jp="事業概要" />
        </h2>

        <div className={styles.box}>
          <dl className={styles.list}>
            <div className={styles.item}>
              <dt>屋号</dt>
              <dd>HIVE（ハイブ）</dd>
            </div>
            <div className={styles.item}>
              <dt>代表者</dt>
              <dd>赤尾 起弥</dd>
            </div>
            <div className={styles.item}>
              <dt>設立年月</dt>
              <dd>2024年9月</dd>
            </div>
            <div className={styles.item}>
              <dt>所在地</dt>
              <dd>
                〒530-0001
                <br />
                大阪府大阪市北区梅田1-1-3大阪駅前第3ビル 29階
              </dd>
            </div>
            <div className={styles.item}>
              <dt>事業内容</dt>
              <dd>
                <ul>
                  <li>ホームページ制作、</li>
                  <li>ホームページの保守・運用、</li>
                  <li>コーディング代行、</li>
                  <li>MEO対策代行、</li>
                  <li>Instagram運用代行、</li>
                  <li>LINE公式構築代行</li>
                </ul>
              </dd>
            </div>
          </dl>

          <div className={styles.profile}>
            <h3 className={openSans.className}>
              <SectionTitle en="PROFILE" jp="代表プロフィール" />
            </h3>
            <div className={styles.prof}>
              <div className={styles.nameWrap}>
                <p className={styles.name}>赤尾 起弥</p>
                <p className={`${styles.enname} ${openSans.className}`}>
                  <span>TATSUYA</span> <span>AKAO</span>
                </p>
              </div>
              <div className={styles.desc}>
                <p>
                  2019年にフリーランスとしてWeb制作のキャリアをスタートし、これまで多くの企業や個人のお客様とお仕事をさせていただきました。海外インターンでの経験を経て、多様な文化や視点からのアプローチを学び、その後は数多くのWeb制作会社と協力しながら、スキルと実績を積み重ねてきました。
                </p>
                <p>
                  2024年9月には、個人事業主として「HIVE」を立ち上げ、屋号として活動を開始しました。これからもお客様のビジネスの成長をサポートするパートナーとして、誠実かつ柔軟な対応を心がけ、最適なWeb戦略を提供してまいります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
