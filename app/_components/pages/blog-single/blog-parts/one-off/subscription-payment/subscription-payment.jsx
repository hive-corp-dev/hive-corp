import styles from "./subscription-payment.module.scss";

export default function SubscriptionPayment() {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>項目</th>
            <th>サブスク型ホームページ</th>
            <th>買い切り型ホームページ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>支払い方法</td>
            <td>月額料金</td>
            <td>一括払い</td>
          </tr>
          <tr>
            <td>初期費用</td>
            <td>低い</td>
            <td>高い</td>
          </tr>
          <tr>
            <td>ホームページ利用期間</td>
            <td>契約期間中</td>
            <td>
              無期限
              <br />
              ただし制作後の保守・運用は別途料金がかかる
            </td>
          </tr>
          <tr>
            <td>更新代行</td>
            <td>月額料金に含まれている</td>
            <td>別途料金がかかる</td>
          </tr>
          <tr>
            <td>解約</td>
            <td>
              いつでも可能
              <br />
              （最短で解約すれば、1~2ヶ月分の料金を払うだけで良い）
            </td>
            <td>
              不可
              <br />
              （支払った金額は戻ってこない）
            </td>
          </tr>
          <tr>
            <td>アップデート</td>
            <td>自動で行われる</td>
            <td>別途料金がかかる</td>
          </tr>
          <tr>
            <td>セキュリティ対策</td>
            <td>自動で行われる</td>
            <td>別途料金がかかる</td>
          </tr>
          <tr>
            <td>サポート</td>
            <td>充実している</td>
            <td>別途料金がかかる</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
