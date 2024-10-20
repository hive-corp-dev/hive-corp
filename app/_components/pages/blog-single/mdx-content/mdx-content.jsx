import { useMDXComponent } from "@content-collections/mdx/react";
import Btn from "../blog-parts/btn/btn";
import NextImage from "../blog-parts/next-image/next-image";
import TocArticle from "../toc-article/toc-article";
import LinkCard from "../blog-parts/link-card/link-card";
import Spacer from "../blog-parts/spacer/spacer";
import CodeHead from "../blog-parts/code-head/code-head";
import Pre from "../blog-parts/pre/pre";
import OuterLink from "../blog-parts/outer-link/outer-link";
import InfoBox from "../blog-parts/info-box/info-box";
import Highlight from "../blog-parts/highlight/highlight";
import BrowserBox from "../blog-parts/browser-box/browser-box";
import NpmVersions from "../blog-parts/npm-versions/npm-versions";

import JamstackSsrComparison from "../blog-parts/one-off/jamstack-ssr-comparison/jamstack-ssr-comparison";
import SubscriptionPayment from "../blog-parts/one-off/subscription-payment/subscription-payment";
import CssHasPseudoClass from "../blog-parts/one-off/css-has-pseudo-class/css-has-pseudo-class";

import styles from "./mdx-content.module.scss";

export default function MDX({ code }) {
  const Component = useMDXComponent(code);

  return (
    <article className={`${styles.content} js-toc-content`}>
      <Component
        components={{
          code: ({ ...props }) => <code className={`${styles.code}`} {...props} />,
          pre: Pre,
          Btn,
          NextImage,
          TocArticle,
          LinkCard,
          Spacer,
          CodeHead,
          OuterLink,
          InfoBox,
          Highlight,
          BrowserBox,
          NpmVersions,

          // one off components
          JamstackSsrComparison,
          SubscriptionPayment,
          CssHasPseudoClass,
        }}
      />
    </article>
  );
}
