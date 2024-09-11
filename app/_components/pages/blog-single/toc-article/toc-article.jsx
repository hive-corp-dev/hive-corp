"use client";

import { useEffect } from "react";
import tocbot from "tocbot";
import { MdOutlineToc } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import styles from "./toc-article.module.scss";

export default function TocArticle() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc-article", // Select the wrapper of toc
      contentSelector: ".js-toc-content", // Select the warpper of contents
      headingSelector: "h2, h3", // Choose the heading tags
      /* Optional 1.
      Enable these if you have a sticky header and adjust the offset value
      */
      // headingsOffset: 100,
      // scrollSmoothOffset: -100,
      /* Optional 2.
      Enable this if 'active' class on scroll won't work properly
      */
      hasInnerContainers: true,
    });
    return () => tocbot.destroy();
  }, []);
  return (
    <div className={styles.toc}>
      <div className={styles.toc_head}>
        {/* <div className={styles.toc_head_icon}>
          <FaBook />
        </div> */}
        <span>目次</span>
      </div>
      <div className="toc-wrap js-toc-article"></div>
    </div>
  );
}
