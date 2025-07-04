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

type Params = Promise<{ slug: string }>;

const DirectionElement = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const qweryP = qs.stringify({
    populate: {
      subcategories: {
        populate: "*",
      },
      related_products: {
        populate: {
          preview_image: true,
        },
      },
    },
  });

  const { data } = await getCategory(slug, qweryP);

  return (
    <div>
      <div className="main-container">
        <Typography
          className={styles.category_page_title}
          register="40"
          outline="bold">
          {data.title}
        </Typography>
      </div>
      <IntrestingProducts
        product_list={data.related_products}
        className={"swiper-container"}
      />
      <section className={classNames("main-container")}>
        <ul className={classNames(styles.direction_categoryList)}>
          {data.subcategories.map((el: any) => (
            <li key={el.id} className={styles.direction_categoryItem}>
              <Link href={`/store/${el.slug}`}>
                <CategoryCard
                  title={el.title}
                  description={el.description}
                  icon="dfsfsdfdsf"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <MainForm />

      <AboutReviews />
    </div>
  );
};

export default DirectionElement;
