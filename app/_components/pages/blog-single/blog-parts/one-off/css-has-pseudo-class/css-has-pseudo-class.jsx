import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import styles from "./css-has-pseudo-class.module.scss";

function Select() {
  return (
    <form className={styles.form}>
      <select name="option" className={styles.select}>
        <option value="">選択してください</option>
        <option value="選択肢1">選択肢1</option>
        <option value="選択肢2">選択肢2</option>
        <option value="選択肢3">選択肢3</option>
      </select>
    </form>
  );
}

function ReferrerSelect() {
  return (
    <form className={styles.refForm}>
      <label for="referrer">サービスを知ったきっかけ</label>
      <select name="referrer" className={styles.refSelect}>
        <option value="google">Google検索</option>
        <option value="sns">SNS</option>
        <option value="ads">Web広告</option>
        <option value="referral">知人の紹介</option>
        <option value="others">その他</option>
      </select>

      <div class={styles.refOthersInput}>
        <label for="others">その他</label>
        <input type="text" name="others" className={styles.refInput} />
      </div>
    </form>
  );
}

function SnsButtons() {
  return (
    <div className={styles.snsButtons}>
      <button className={`${styles.button} ${styles.isX}`}>
        <FaXTwitter />
      </button>
      <button className={`${styles.button} ${styles.isIg}`}>
        <FaInstagram />
      </button>
      <button className={`${styles.button} ${styles.isFb}`}>
        <FaFacebookF />
      </button>
    </div>
  );
}

const CssHasPseudoClass = {
  select: Select,
  refSelect: ReferrerSelect,
  sns: SnsButtons,
};

export default CssHasPseudoClass;
