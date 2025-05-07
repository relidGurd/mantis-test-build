import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
import MainForm from "@/components/main-form/main-form";
import IntrestingProducts from "@/sections/intresting-products/intresting-products";
import classNames from "classnames";
import CategoryCard from "@/components/category-card/category-card";
import AboutReviews from "@/pages/about-us/about-reviews/about-reviews";
const DirectionElement = () => {
  return (
    <main>
      <div className="main-container">
        <Typography register="40" outline="bold">
          Название направления
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
