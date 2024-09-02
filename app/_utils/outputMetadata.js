import { SITE_INFO } from "../_data/metadata";

export const outputMetadata = (title, desc, slug, others = {}) => {
  return {
    metadataBase: new URL(SITE_INFO.siteUrl),
    title: title ? `${title} | ${SITE_INFO.siteName}` : SITE_INFO.siteName,
    description: desc ? desc : SITE_INFO.siteDescription,
    openGraph: {
      title: title ? `${title} | ${SITE_INFO.siteName}` : SITE_INFO.siteName,
      description: desc ? desc : SITE_INFO.siteDescription,
      url: slug && slug,
      type: "website",
      locale: "ja_JP",
      siteName: SITE_INFO.siteName,
      images: [
        {
          url: "/images/ogp.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary",
    },
    ...others,
  };
};
