import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/nextjs-14-app-router-google-analytics",
        destination: "https://webtech-media.jp/article/nextjs-14-app-router-google-analytics",
        permanent: true,
      },
      {
        source: "/blog/nextjs-14-app-router-microsoft-clarity",
        destination: "https://webtech-media.jp/article/nextjs-14-app-router-microsoft-clarity",
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
