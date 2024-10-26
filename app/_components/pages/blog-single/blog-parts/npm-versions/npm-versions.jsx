import React from "react";
import styles from "./npm-versions.module.scss";

export default function NpmVersions({ title = "執筆時点のバージョン情報", versions }) {
  return (
    <div className={styles.box}>
      <div className={styles.title}>{title}</div>
      <div className={styles.card}>
        {versions.map((version, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.line}>
              <span className={styles.packageName}>&quot;{version.name}&quot;:</span>
              <span className={styles.version}>&quot;{version.version}&quot;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
