// Jamstackとサーバーサイドレンダリングの、ページリクエストからレスポンスまでの違いを比較するコンポーネント

import Image from "next/image";
import styles from "./jamstack-ssr-comparison.module.scss";

export default function JamstackSsrComparison() {
  return (
    <div className={styles.wrap}>
      <div className={styles.col}>
        <ol className={styles.list}>
          <li className={styles.item}>
            <div className={styles.title}>①ユーザーのリクエスト</div>
            <div className={styles.icon}>
              <Image
                src="/images/components/jamstack-ssr-comparison/icon-user.svg"
                width={40}
                height={40}
                alt="ページ生成"
              />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.title}>②サーバーでページ生成</div>
            <div className={styles.icon}>
              <Image
                src="/images/components/jamstack-ssr-comparison/icon-server.svg"
                width={40}
                height={40}
                alt="ページ生成"
              />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.title}>③ページ生成完了</div>
            <div className={styles.icon}>
              <Image
                src="/images/components/jamstack-ssr-comparison/icon-generate-page.svg"
                width={40}
                height={40}
                alt="ページ生成"
              />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.title}>④ブラウザに返却</div>
            <div className={styles.icon}>
              <Image
                src="/images/components/jamstack-ssr-comparison/icon-browser.svg"
                width={40}
                height={40}
                alt="ページ生成"
              />
            </div>
          </li>
        </ol>
      </div>
      <div className={styles.col}>
        <ol className={styles.list}>
          <li className={styles.item}>
            <div className={styles.title}>ユーザーのリクエスト</div>
            <div className={styles.text}>
              ユーザーがURLを入力し、リクエストがCDN（コンテンツ配信ネットワーク）に送信されます。
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.title}>静的ファイルの配信</div>
            <div className={styles.text}>
              すでにビルドされた静的なHTML、CSS、JavaScriptファイルがCDNにキャッシュされており、ユーザーの最寄りのCDNエッジサーバーから即座に配信されます。
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.title}>ブラウザへのレスポンス</div>
            <div className={styles.text}>
              CDNからキャッシュされたファイルがすぐにブラウザに送信され、ページが高速に表示されます。
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
