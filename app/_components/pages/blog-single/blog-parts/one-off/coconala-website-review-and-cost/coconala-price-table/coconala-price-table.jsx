import OuterLink from "../../../outer-link/outer-link";
import styles from "./coconala-price-table.module.scss";

export default function CoconalaPriceTable() {
  return (
    <figure className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ホームページの規模</th>
            <th>作成費用の相場</th>
            <th>目的</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              小規模サイト
              <br />
              （テンプレート使用）
            </td>
            <td>10万～50万円</td>
            <td>
              ・名刺代わりの簡単な内容
              <br />
              ・集客には不向き
            </td>
          </tr>
          <tr>
            <td>
              中規模サイト
              <br />
              （10ページ以上）
            </td>
            <td>50万～100万円</td>
            <td>
              ・企業紹介ができる内容
              <br />
              ・内容、コンテンツ量によってはSEOによる集客が可能
            </td>
          </tr>
          <tr>
            <td>
              大規模サイト
              <br />
              （100ページ前後）
            </td>
            <td>100万～300万円</td>
            <td>
              ・企業ブランディングができる内容
              <br />
              ・SEOによる集客も可能
            </td>
          </tr>
          <tr>
            <td>ECサイト</td>
            <td>10万～500万円</td>
            <td>・ネットショッピングを目的とした自社サイト</td>
          </tr>
        </tbody>
      </table>

      <figcaption className={styles.caption}>
        <OuterLink href="https://coconala.com/business_magazine/16169#index_id1">
          参考：ココナラビジネスマガジン「ホームページの作成費用】相場はどれくらい？作成の流れも解説！」より
        </OuterLink>
      </figcaption>
    </figure>
  );
}
