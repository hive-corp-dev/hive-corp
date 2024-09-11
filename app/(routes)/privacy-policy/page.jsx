import { openSans } from "@/app/_utils/fonts";
import Container from "@/app/_components/common/container/container";
import { MAIL_ADDRESS } from "@/app/_data/data";
import styles from "./privacy-policy-page.module.scss";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { PRIVACY_METADATA } from "@/app/_data/metadata";
import Breadcrumb from "@/app/_components/common/breadcrumb/breadcrumb";

export const metadata = outputMetadata(PRIVACY_METADATA.title, PRIVACY_METADATA.description, PRIVACY_METADATA.slug, {
  robots: {
    index: false,
  },
});

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.mv}>
        <h1 className={styles.title}>
          <span className={openSans.className}>PRIVACY POLICY</span>
          <span>プライバシーポリシー</span>
        </h1>
      </section>

      <section className={styles.body}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <p>
              HIVE（以下、「当方」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>
            <h2>第1条（個人情報）</h2>
            <p>
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
            <h2>第2条（法令、規範の遵守）</h2>
            <p>
              当方は、取得した個人情報の取扱いに関し、個人情報の保護に関する法律、個人情報保護に関するガイドライン等の指針、その他個人情報保護に関する関係法令を遵守します。
            </p>
            <h2>第3条（個人情報の管理）</h2>
            <p>
              当方は、個人情報の保護に関して、組織的、物理的、人的、技術的に適切な対策を実施し、当方の取り扱う個人情報の漏えい、滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講ずるものとします。
            </p>
            <h2>第4条（個人情報の取得）</h2>
            <p>
              当方は、本サービスの運営に必要な範囲で、本ウェブサイトの利用者（以下「ユーザー」といいます。）から、ユーザーに係る個人情報を取得することがあります。
            </p>
            <h2>第5条（個人情報の利用目的）</h2>
            <p>
              当方は、当方が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。
            </p>
            <ol className={styles.alphabet}>
              <li className={styles.alphabetItem}>本ウェブサイトの運営、維持、管理</li>
              <li className={styles.alphabetItem}>ユーザーからの問合せに対する回答</li>
              <li className={styles.alphabetItem}>ユーザーに対する通知</li>
              <li className={styles.alphabetItem}>本ウェブサイトを通じたサービスの提供及び紹介</li>
              <li className={styles.alphabetItem}>有料サービスにおいて、ユーザーに対する利用料金の請求</li>
              <li className={styles.alphabetItem}>本ウェブサイトの品質向上のためのアンケート</li>
              <li className={styles.alphabetItem}>上記の利用目的に付随する目的</li>
            </ol>
            <h2>第6条（個人情報の利用目的の変更）</h2>
            <p>
              当方は、前項で特定した利用目的は、予め本人の同意を得た場合を除くほかは、原則として変更しません。但し、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲において、予め変更後の利用目的を公表の上で変更を行う場合はこの限りではありません。
            </p>
            <h2>第7条（個人情報の第三者提供）</h2>
            <ol className={styles.number}>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  <p>
                    当方は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                  </p>
                  <ol className={styles.alphabet}>
                    <li className={styles.alphabetItem}>
                      <div>
                        人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                      </div>
                    </li>
                    <li className={styles.alphabetItem}>
                      <div>
                        公衆衛生の向上、または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
                      </div>
                    </li>
                    <li className={styles.alphabetItem}>
                      <div>
                        国の機関、もしくは地方公共団体、またはその委託を受けた者が、法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                      </div>
                    </li>
                    <li className={styles.alphabetItem}>
                      <div>
                        <p>予め次の事項を告知あるいは公表し、かつ当方が個人情報保護委員会に届出をしたとき</p>
                        <ol>
                          <li>①利用目的に第三者への提供を含むこと</li>
                          <li>②第三者に提供されるデータの項目</li>
                          <li>③第三者への提供の手段または方法</li>
                          <li>④本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                          <li>⑤本人の求めを受け付ける方法</li>
                        </ol>
                      </div>
                    </li>
                  </ol>
                </div>
              </li>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  <p>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。</p>
                  <ol className={styles.alphabet}>
                    <li className={styles.alphabetItem}>
                      <div>
                        当方が、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を委託する場合
                      </div>
                    </li>
                    <li className={styles.alphabetItem}>
                      <div>合併その他の事由による事業の承継に伴って個人情報が提供される場合</div>
                    </li>
                    <li className={styles.alphabetItem}>
                      <div>
                        個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合
                      </div>
                    </li>
                  </ol>
                </div>
              </li>
            </ol>
            <h2>第8条（個人情報の開示）</h2>
            <ol className={styles.number}>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  <p>
                    当方は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないことがあり、開示しない決定をした場合には、その旨を遅滞なく通知します。なお、個人情報の開示に際しては、1件あたり300円の手数料を申し受けます。
                  </p>
                  <ol className={styles.alphabet}>
                    <li className={styles.alphabetItem}>
                      <div>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</div>
                    </li>
                    <li className={styles.alphabetItem}>
                      <div>当方の業務の実施に、著しい支障を及ぼすおそれがある場合</div>
                    </li>
                    <li className={styles.alphabetItem}>
                      <div>その他、法令に違反する可能性がある場合</div>
                    </li>
                  </ol>
                </div>
              </li>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  <p>
                    前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。
                  </p>
                </div>
              </li>
            </ol>
            <h2>第9条（個人情報の訂正および削除）</h2>
            <ol className={styles.number}>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  ユーザーは、当方の保有する自己の個人情報が誤った情報である場合には、当方が定める手続きにより、当方に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。
                </div>
              </li>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  当方は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には遅滞なく、当該個人情報の訂正等を行うものとします。
                </div>
              </li>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  当方は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。
                </div>
              </li>
            </ol>
            <h2>第10条（個人情報の利用停止等）</h2>
            <ol className={styles.number}>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  当方は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。
                </div>
              </li>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。
                </div>
              </li>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  当方は、前項の規定に基づき利用停止等を行った場合、または利用停止等を行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。
                </div>
              </li>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  利用停止等に多額の費用を有する場合、その他利用停止等を行うことが困難な場合であってユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じるものとします。
                </div>
              </li>
            </ol>
            <h2>第11条（個人情報の廃棄）</h2>
            <p>
              当方は、個人情報の利用目的に照らしその必要性が失われたときは、個人情報を消去又は廃棄するものとし、当該消去及び廃棄は、外部流失等の危険を防止するために必要かつ適切な方法により、業務の遂行上必要な限りにおいて行います。
            </p>
            <h2>第12条（Cookie（クッキー）について）</h2>
            <p>
              本ウェブサイトでは、一部のコンテンツについてCookieを利用しています。Cookieとは、ウェブサイトにアクセスした際にブラウザに保存される情報で、名前やメールアドレスなどの個人情報は含みません。当サイトにアクセスいただいた方の利便性の向上や、効果的な広告を配信し、またアクセス解析にCookieを利用する場合があります。なお、ブラウザの設定によりCookieを使用しないようにすることもできます。
            </p>
            <h2>第13条（Googleアナリティクス）について）</h2>
            <p>
              本ウェブサイトでは、「Googleアナリティクス」を使用しています。このデータは匿名で収集されており、個人を特定するものではありません。「Googleアナリティクス」の詳細は、Googleアナリティクスサービス利用規約や、Googleポリシーと規約をご確認ください。
            </p>
            <h2>第14条（プライバシーポリシーの変更）</h2>
            <ol className={styles.number}>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
                </div>
              </li>
              <li className={styles.numberItem}>
                <div className={styles.listContent}>
                  当方が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                </div>
              </li>
            </ol>
            <h2>第15条（苦情や相談の担当窓口）</h2>
            <p>
              当方は、個人情報の取扱いに関する担当窓口及び責任者を以下の通り設けます。
              <br />
              メールアドレス：{MAIL_ADDRESS}
              <br />
              個人情報苦情・相談窓口責任者 赤尾 起弥
            </p>
          </div>
        </Container>
      </section>
      <Breadcrumb paths={[{ name: "プライバシーポリシー" }]} />
    </main>
  );
}
