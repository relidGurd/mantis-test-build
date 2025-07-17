import { getBlog } from "@/api/blog/blog";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import NewsCard from "@/components/news-card/news-card";
import Pagination from "@/components/pagination/pagination";
import routes from "@/utils/breadcrumbs-massive";
import Link from "next/link";
import qs from "qs";
import styles from "./news-list.module.css";
import type { Metadata } from "next";
import Tags from "@/components/tags/tags";
import { buildBlogQuery } from "./helpers";
import classNames from "classnames";

export const metadata: Metadata = {
  title: `Мантис | Блог | Все необходимое для Вашего бизнеса!`,
  description:
    "Надёжные решения для бизнеса: техника, 1С и разработка под ключ Продажа и внедрение программ 1С, лицензий и модулей. Широкий выбор офисной и серверной техники. Профессиональная настройка, доработка и сопровождение 1С, разработка индивидуальных IT-решений. Комплексный подход к автоматизации бизнеса — всё в одном месте.",
  openGraph: {
    title: `Мантис | Блог | Все необходимое для Вашего бизнеса!`,
    description:
      "Надёжные решения для бизнеса: техника, 1С и разработка под ключ Продажа и внедрение программ 1С, лицензий и модулей. Широкий выбор офисной и серверной техники. Профессиональная настройка, доработка и сопровождение 1С, разработка индивидуальных IT-решений. Комплексный подход к автоматизации бизнеса — всё в одном месте.",
    url: "https://mantis-test-build.vercel.app",
    images: [
      {
        url: "https://mantis-test-build.vercel.app/open-g.jpg", // абсолютный URL
        width: 1200,
        height: 630,
        alt: `Мантис | Блог | Все необходимое для Вашего бизнеса!`,
      },
    ],
  },
};

async function resolveSearchParams(
  searchParamsPromise?: Promise<{ query?: string; page?: string }>
) {
  const resolved = searchParamsPromise ? await searchParamsPromise : {};
  const query = resolved.query || "";
  const page = query.length > 0 ? 1 : Number(resolved.page) || 1;

  return { query, page };
}

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const { query, page } = await resolveSearchParams(props.searchParams);
  const blogQuery = buildBlogQuery(query, page);

  const { data, meta } = await getBlog(blogQuery);

  const tagsBlog = [
    {
      title: "Автоматизация",
    },
    {
      title: "Облачные решения",
    },
    {
      title: "IT-инфраструктура",
    },
  ];

  return (
    <>
      <Breadcrumbs className="main-container-blog" list={routes.blogList} />
      <section
        className={classNames("main-container-blog", styles.tagsContainer)}
      >
        <Tags tags={tagsBlog} />
      </section>
      <section className="main-container-blog">
        <ul className={styles.news_list}>
          {data.map((el: any) => (
            <li key={el.id} className={styles.list_item}>
              <Link href={`/blog-page/${el.slug}`}>
                <NewsCard
                  title={el.title}
                  description={el.seo_description[0].children[0].text}
                  date={el.date}
                  img={el.image.url}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Pagination totalPages={meta.pagination.pageCount} variant={"blog"} />
      </section>
    </>
  );
}
