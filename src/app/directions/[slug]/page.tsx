import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
import MainForm from "@/components/main-form/main-form";
import IntrestingProducts from "@/sections/intresting-products/intresting-products";
import classNames from "classnames";
import CategoryCard from "@/components/category-card/category-card";
import AboutReviews from "@/pages/about-us/about-reviews/about-reviews";
import { getCategory } from "@/api/directions/directions";

type Params = Promise<{ slug: string }>;

const DirectionElement = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const { data } = await getCategory(slug);

  return (
    <main>
      <div className="main-container">
        <Typography register="40" outline="bold">
          {data.title}
        </Typography>
      </div>
      <IntrestingProducts className={"swiper-container"} />
      <section className={classNames("main-container")}>
        <ul className={classNames(styles.direction_categoryList)}>
          <li className={styles.direction_categoryItem}>
            <CategoryCard title="Test" description="te" icon="dfsfsdfdsf" />
          </li>
          <li className={styles.direction_categoryItem}>
            <CategoryCard title="Test" description="te" icon="dfsfsdfdsf" />
          </li>
          <li className={styles.direction_categoryItem}>
            <CategoryCard title="Test" description="te" icon="dfsfsdfdsf" />
          </li>
          <li className={styles.direction_categoryItem}>
            <CategoryCard title="Test" description="te" icon="dfsfsdfdsf" />
          </li>
          <li className={styles.direction_categoryItem}>
            <CategoryCard title="Test" description="te" icon="dfsfsdfdsf" />
          </li>
        </ul>
      </section>

      <MainForm />

      <AboutReviews />
    </main>
  );
};

export default DirectionElement;
