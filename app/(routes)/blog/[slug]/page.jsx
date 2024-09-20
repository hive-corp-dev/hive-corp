import { allBlogPosts } from "content-collections";
import MDX from "@/app/_components/pages/blog-single/mdx-content/mdx-content";
import BlogMv from "@/app/_components/pages/blog-single/blog-mv/blog-mv";
import Container from "@/app/_components/common/container/container";
import Image from "next/image";
import styles from "./blog-single-page.module.scss";
import BlogSingleSidebar from "@/app/_components/pages/blog-single/blog-single-sidebar/blog-single-sidebar";
import AuthorInfo from "@/app/_components/pages/blog-single/author-info/author-info";
import Link from "next/link";
import { openSans } from "@/app/_utils/fonts";
import Breadcrumb from "@/app/_components/common/breadcrumb/breadcrumb";
import SnsShare from "@/app/_components/pages/blog-single/sns-share/sns-share";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { HIVE_URL } from "@/app/_data/data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post._meta.path,
  }));
}

export const generateMetadata = ({ params }) => {
  const post = allBlogPosts.find((post) => post._meta.path === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return outputMetadata(`${post.title} | ブログ`, `${post.description}`, `/blog/${params.slug}`, {
    openGraph: {
      images: [
        {
          url: post.thumbnail,
        },
      ],
    },
  });
};

export default function BlogPost({ params }) {
  const post = allBlogPosts.find((post) => post._meta.path === params.slug);

  const { title, category, publishedAt, modifiedAt, thumbnail, tags, mdx, author } = post;

  return (
    <div>
      <BlogMv title={title} categorySlug={category} tagSlugs={tags} publishedAt={publishedAt} modifiedAt={modifiedAt} />
      <div className={styles.wrap}>
        <Container className={styles.inner}>
          <main className={styles.main}>
            <div className={styles.thumb}>
              <Image src={thumbnail} width={1600} height={900} alt={title} priority />
            </div>
            <MDX code={mdx} />

            {/* <div className={styles.author}>
              <AuthorInfo authorId={author} />
            </div> */}

            <SnsShare postUrl={`${HIVE_URL}/blog/${params.slug}`} title={title} />

            <div className={styles.archiveBtnWrap}>
              <Link className={`${styles.archiveBtn} ${openSans.className}`} href="/blog">
                ALL BLOG
              </Link>
            </div>
          </main>
          <BlogSingleSidebar />
        </Container>
      </div>
      <Breadcrumb paths={[{ name: "ブログ", slug: "/blog" }, { name: title }]} />
    </div>
  );
}
