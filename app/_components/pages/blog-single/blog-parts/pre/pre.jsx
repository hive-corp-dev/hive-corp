"use client";

import { useEffect, useState, useRef } from "react";
import { MdDone } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import styles from "./pre.module.scss";

export default function Pre({ ...props }) {
  const [isCopied, setIsCopied] = useState(false);
  const codeContent = useRef(null);

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      alert((error && error.message) || "Failed to copy to clipboard.");
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  return (
    <>
      <button
        className={isCopied ? `${styles.copy} ${styles.copy_done}` : styles.copy}
        onClick={() => copyToClipboard(codeContent.current.textContent)}
        title="Copy"
      >
        {isCopied ? (
          <span className={styles.icon_done}>
            <MdDone />
          </span>
        ) : (
          <span className={styles.icon_copy}>
            <MdContentCopy />
          </span>
        )}
      </button>
      <pre className={styles.pre} {...props} ref={codeContent}>
        {props.children}
      </pre>
    </>
  );
}
