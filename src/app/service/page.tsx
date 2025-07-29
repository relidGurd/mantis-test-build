import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
import MainForm from "@/components/main-form/main-form";
import IntrestingProducts from "@/sections/intresting-products/intresting-products";
import classNames from "classnames";
import CategoryCard from "@/components/category-card/category-card";
import AboutReviews from "@/pages/about-us/about-reviews/about-reviews";
import { getCategory } from "@/api/directions/directions";
import qs from "qs";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
import { getServiceCategory } from "@/api/service-page/service-page";
import { getRelatedProducts } from "@/api/products/products";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Мантис | Услуги | Все необходимое для Вашего бизнеса!`,
    description:
      "Надёжные решения для бизнеса: техника, 1С и разработка под ключ Продажа и внедрение программ 1С, лицензий и модулей. Широкий выбор офисной и серверной техники. Профессиональная настройка, доработка и сопровождение 1С, разработка индивидуальных IT-решений. Комплексный подход к автоматизации бизнеса — всё в одном месте.",
    openGraph: {
      title: `Мантис | Услуги | Все необходимое для Вашего бизнеса!`,
      description:
        "Надёжные решения для бизнеса: техника, 1С и разработка под ключ Продажа и внедрение программ 1С, лицензий и модулей. Широкий выбор офисной и серверной техники. Профессиональная настройка, доработка и сопровождение 1С, разработка индивидуальных IT-решений. Комплексный подход к автоматизации бизнеса — всё в одном месте.",
      url: "https://mantis-test-build.vercel.app",
      images: [
        {
          url: "https://mantis-test-build.vercel.app/open-g.jpg", // абсолютный URL
          width: 1200,
          height: 630,
          alt: `Мантис | Услуги | Все необходимое для Вашего бизнеса!`,
        },
      ],
    },
  };
}

const ServiceElement = async () => {
  // const qweryP = qs.stringify({
  //   populate: {
  //     steps: {
  //       populate: {
  //         icon: "*",
  //       },
  //     },
  //   },
  // });

  const { data } = await getServiceCategory();

  return (
    <div>
      <div className="main-container">
        <Typography
          className={styles.category_page_title}
          register="40"
          outline="bold"
        >
          {data.title}
        </Typography>
      </div>
      {/* <IntrestingProducts
        title="Популярные товары"
        product_list={data.related_products}
        className={"swiper-container"}
      /> */}
      {/* <section className={classNames("main-container")}>
        <Typography
          className={styles.direction_categoryList_title}
          variant="h2"
          register="32"
          outline="semibold"
        >
          Наше предложение
        </Typography>
        <ul className={classNames(styles.direction_categoryList)}>
          {data.subcategories.map((el: any) => (
            <li key={el.id} className={styles.direction_categoryItem}>
              <Link href={`/store/${el.slug}`}>
                <CategoryCard
                  title={el.title}
                  description={el.description}
                  icon={el.icon.url}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section> */}

      <MainForm />

      <AboutReviews />
    </div>
  );
};

export default ServiceElement;
