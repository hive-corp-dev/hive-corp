import styles from "./table.module.scss";

export default function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>報酬額</th>
          <th>システム利用料</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10万円以下の部分</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>10万円超20万円以下の部分</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>20万円超の部分</td>
          <td>5%</td>
        </tr>
        <tr>
          <td colSpan={2}>
            例：
            <br />
            報酬額5万円の場合：システム手数料1万円
            <br />
            報酬額15万円の場合：システム手数料2万5千円（10万円×20%+5万円×10%）
            <br />
            報酬額30万円の場合：システム手数料3万円（10万円×20%+10万円×10％+10万円×5%）
          </td>
        </tr>
      </tbody>
    </table>
  );
}
