import { useMDXComponent } from "@content-collections/mdx/react";
import Btn from "../blog-parts/btn/btn";
import NextImage from "../blog-parts/next-image/next-image";
import TocArticle from "../toc-article/toc-article";
import LinkCard from "../blog-parts/link-card/link-card";
import Spacer from "../blog-parts/spacer/spacer";
import JamstackSsrComparison from "../blog-parts/one-off/jamstack-ssr-comparison/jamstack-ssr-comparison";
import styles from "./mdx-content.module.scss";

export default function MDX({ code }) {
  const Component = useMDXComponent(code);

  return (
    <article className={`${styles.content} js-toc-content`}>
      <Component
        components={{
          Btn,
          NextImage,
          TocArticle,
          LinkCard,
          Spacer,

          // one off components
          JamstackSsrComparison,
        }}
      />
    </article>
  );
}
