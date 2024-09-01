import Container from "./_components/common/container/container";
import { openSans } from "./_utils/fonts";
import styles from "./not-found.module.scss";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className={styles.main}>
      <section className={styles.mv}>
        <h1 className={styles.title}>
          <span className={openSans.className}>404 NOT FOUND</span>
          <span>お探しのページが見つかりませんでした。</span>
        </h1>

        <div className={styles.text}>
          <p>
            申し訳ございません。お客様がアクセスしようとしたページが見つかりませんでした。
            <br />
            ページが移動または削除されたか、URLの入力間違いの可能性があります。
            <br />
            正しいURLをご入力いただくか、メニューからご覧になりたい情報をお探しください。
          </p>
        </div>

        <div className={styles.btnWrap}>
          <Link href="/" className={`${openSans.className} ${styles.btn}`}>
            HOME
          </Link>
        </div>
      </section>
    </main>
  );
}
