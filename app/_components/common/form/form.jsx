"use client";

import { useEffect, useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import styles from "./form.module.scss";
import { openSans } from "@/app/_utils/fonts";

const schema = yup.object().shape({
  お名前: yup.string().required("※入力必須の項目です"),
  法人名: yup.string(),
  電話番号: yup.string(),
  メールアドレス: yup.string().email("※正しいメールアドレスの形式でご入力ください").required("※入力必須の項目です"),
  お問い合わせ内容: yup
    .string()
    .oneOf(
      [
        "ホームページ制作について",
        "Instagram運用代行について",
        "MEO対策について",
        "LINE公式構築について",
        "その他ご質問等",
      ],
      "※いずれかを選択してください"
    )
    .required(),
  お問い合わせ詳細: yup.string().required("※入力必須の項目です"),
});

export default function Form() {
  const router = useRouter();
  const categoryPlaceholder = "以下から選択してください";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      お名前: "",
      法人名: "",
      電話番号: "",
      メールアドレス: "",
      お問い合わせ内容: categoryPlaceholder,
      お問い合わせ詳細: "",
    },
    resolver: yupResolver(schema),
  });

  const send = (data) => {
    axios
      .post("https://ssgform.com/s/OgMmt0Oelk7X", data, {
        headers: {
          "content-type": "multipart/form-data", //axiosでフォーム送信する時に必要なheader情報
          "X-Requested-With": "XMLHttpRequest", //これが無いと400レスポンスが返却される
        },
      })
      .then((response) => {
        router.push("/thanks");
      })
      .catch((error) => {
        console.error("エラー:", error);
        alert("エラー: " + error);
      });
  };

  // selectにもplaceholderを設定
  const handleSelectChange = (event) => {
    const selectElement = event.target;
    if (selectElement.value === categoryPlaceholder) {
      selectElement.style.color = "#979797"; // プレースホルダーの色
    } else {
      selectElement.style.color = "#1d1d1f"; // 通常のテキスト色
    }
  };

  return (
    <form
      action="https://ssgform.com/s/zTmUVTZojUhe"
      method="post"
      className={styles.form}
      onSubmit={handleSubmit(send)}
    >
      <div className={styles.inner}>
        <div className={styles.row}>
          <label htmlFor="your-name" className={`${styles.label} ${styles.isRequired}`}>
            お名前
          </label>
          <div className={`${styles.control}`}>
            <input
              type="text"
              id="your-name"
              name="お名前"
              placeholder="山田 太郎"
              className={styles.input}
              {...register("お名前")}
            />
            <p className={styles.errorMessage}>{errors.お名前?.message}</p>
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="corp-name" className={styles.label}>
            法人名
          </label>
          <div className={`${styles.control}`}>
            <input
              type="text"
              id="corp-name"
              name="法人名"
              placeholder="株式会社HIVE"
              className={styles.input}
              {...register("法人名")}
            />
            <p className={styles.errorMessage}>{errors.法人名?.message}</p>
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="tel" className={styles.label}>
            電話番号
          </label>
          <div className={`${styles.control}`}>
            <input
              type="tel"
              id="tel"
              name="電話番号"
              placeholder="09012345678"
              className={styles.input}
              {...register("電話番号")}
            />
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="email" className={`${styles.label} ${styles.isRequired}`}>
            メールアドレス
          </label>
          <div className={`${styles.control}`}>
            <input
              type="email"
              id="email"
              name="メールアドレス"
              placeholder="example@mail.com"
              className={styles.input}
              {...register("メールアドレス")}
            />
            <p className={styles.errorMessage}>{errors.メールアドレス?.message}</p>
          </div>
        </div>

        <div className={styles.row}>
          <label htmlFor="category" className={`${styles.label} ${styles.isRequired}`}>
            お問い合わせ内容
          </label>
          <div className={`${styles.control} ${styles.isSelect}`}>
            <select
              name="お問い合わせ内容"
              id="category"
              className={styles.select}
              {...register("お問い合わせ内容")}
              onChange={handleSelectChange}
              style={{ color: "gray" }}
            >
              <option>{categoryPlaceholder}</option>
              <option value="ホームページ制作について">ホームページ制作について</option>
              <option value="Instagram運用代行について">Instagram運用代行について</option>
              <option value="MEO対策について">MEO対策について</option>
              <option value="LINE公式構築について">LINE公式構築について</option>
              <option value="その他ご質問等">その他ご質問等</option>
            </select>
            <p className={styles.errorMessage}>{errors.お問い合わせ内容?.message}</p>
          </div>
        </div>

        <div className={styles.row}>
          <label htmlFor="detail" className={`${styles.label} ${styles.isRequired}`}>
            お問い合わせ詳細
          </label>
          <div className={`${styles.control}`}>
            <textarea
              name="お問い合わせ詳細"
              id="detail"
              placeholder="詳細を入力してください"
              className={styles.textarea}
              {...register("お問い合わせ詳細")}
            ></textarea>
            <p className={styles.errorMessage}>{errors.お問い合わせ詳細?.message}</p>
          </div>
        </div>

        <div className={`${styles.row} ${styles.isBtn}`}>
          <button type="submit" className={`${styles.submitBtn} ${openSans.className}`}>
            {isSubmitting ? "SENDING..." : "SEND"}
          </button>
        </div>
      </div>
    </form>
  );
}
