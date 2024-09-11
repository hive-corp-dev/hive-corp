import { useMDXComponent } from "@content-collections/mdx/react";
import Btn from "../blog-parts/btn/btn";
import NextImage from "../blog-parts/next-image/next-image";
import TocArticle from "../toc-article/toc-article";
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
        }}
      />
    </article>
  );
}
