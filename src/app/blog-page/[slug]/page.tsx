import { getBlogPage, getBlogPagRelations } from "@/api/blog/blog";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Typography from "@/ui-kit/typography/typography";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import qs from "qs";
import styles from "./blog-page.module.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ProductCard from "@/components/product-card/product-card";
import Link from "next/link";
import RelatedPosts from "@/sections/related-posts/related-posts";

type Params = Promise<{ slug: string }>;

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const blogPageQwery = qs.stringify({
    populate: {
      image: {
        populate: "*",
      },
    },
  });

  const { data } = await getBlogPage(slug, blogPageQwery);

  return {
    title: data.title,
    description: data.seo_description[0].children[0].text,
    openGraph: {
      images: [`https://cms.mantis-185.ru${data.image.url}`],
    },
  };
}

const BlogPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const blogPageQwery = qs.stringify({
    populate: {
      image: {
        populate: "*",
      },
    },
  });

  const { data } = await getBlogPage(slug, blogPageQwery);

  const blogPage = [
    {
      title: "Главная",
      url: "/",
    },
    {
      title: "Блог",
      url: "/blog",
    },
    {
      title: data.title,
      url: "#",
    },
  ];

  const blogPageRealtionsQwery = qs.stringify({
    populate: {
      blogs: {
        populate: "*",
      },
      product: {
        populate: "*",
      },
    },
  });

  const {
    data: { product, blogs },
  } = await getBlogPagRelations(blogPageRealtionsQwery);

  return (
    <div className="main-container">
      <Breadcrumbs list={blogPage} />

      <section>
        <div className={styles.blog_page__bunner}>
          <div className={styles.blog_page__information_container}>
            <div className={styles.blog_page__text_container}>
              <Typography
                className={styles.blog_page__title}
                register="40"
                variant="h1"
                outline="bold"
              >
                {data.title}
              </Typography>
              <Typography className={styles.blog_page__description}>
                {data.seo_description[0].children[0].text}
              </Typography>
            </div>
            <div className={styles.blog_page__blog_details}>
              <div className={styles.blog_page__blog_authorContainer}>
                <div className={styles.blog_page__blog_imageContainer}>
                  <Image
                    className={styles.blog_page__blog_image}
                    src={"/demo.png"}
                    width={40}
                    height={40}
                    alt="Author Image"
                  />
                </div>
                <div>
                  <Typography className={styles.blog_page__blog_authorTitle}>
                    Автор статьи
                  </Typography>
                  <Typography className={styles.blog_page__blog_authorTitle}>
                    Иванов Иван, DevOps-инжинер
                  </Typography>
                </div>
              </div>
              <div>30.02.2002</div>
            </div>
          </div>
          <div className={styles.blog_page__bannerImageContainer}>
            <Image
              className={styles.blog_page__bannerImage}
              src={`https://cms.mantis-185.ru${data.image.url}`}
              width={800}
              height={900}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={styles.blog_body__container}>
        <div className={styles.blog_container}>
          <div className={styles.blog_body}>
            <ReactMarkdown
              children={data.desription}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]} // позволяет обрабатывать HTML внутри Markdown
            />
          </div>

          <div>
            <Link
              className={styles.post_relationProduct}
              href={`/product/${product.slug}`}
            >
              <ProductCard
                name={product.title}
                description={product.description}
                image={product.preview_image.url}
              />
            </Link>
          </div>
        </div>
      </section>
      <RelatedPosts className="swiper-container" posts_list={blogs} />
    </div>
  );
};

export default BlogPage;
