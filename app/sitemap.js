import { HIVE_URL } from "./_data/data";

export default function sitemap() {
  return [
    {
      url: `${HIVE_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
