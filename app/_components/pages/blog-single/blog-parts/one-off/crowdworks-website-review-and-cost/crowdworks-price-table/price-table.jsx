import OuterLink from "../../../outer-link/outer-link";
import styles from "./price-table.module.scss";

export default function PriceTable() {
  return (
    <figure className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ホームページの種類</th>
            <th>制作会社の相場</th>
            <th>クラウドソーシングの相場</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>コーポレートサイト</td>
            <td>20万円～300万円</td>
            <td>5万円～300万円</td>
          </tr>
          <tr>
            <td>ECサイト</td>
            <td>50万円～500万円超</td>
            <td>5万円～300万円</td>
          </tr>
          <tr>
            <td>ランディングページ</td>
            <td>20万円～300万円</td>
            <td>5万円～10万円</td>
          </tr>
          <tr>
            <td>オウンドメディア（WordPress）</td>
            <td>10～30万円</td>
            <td>5万円～20万円</td>
          </tr>
          <tr>
            <td>オウンドメディア</td>
            <td>30万円～300万円</td>
            <td>20万円～200万円</td>
          </tr>
        </tbody>
      </table>

      <figcaption className={styles.caption}>
        <OuterLink href="https://crowdworks.jp/times/know-how/4896/">
          参考：クラウドワークス「ホームページ作成の相場とは？料金表や依頼前に確認すべき3点も紹介」（クラウドソーシングTIMES）
        </OuterLink>
      </figcaption>
    </figure>
  );
}
