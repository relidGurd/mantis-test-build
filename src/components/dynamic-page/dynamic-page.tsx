import AboutStages from "@/pages/about-us/about-stages/about-stages";
import AboutSteps from "@/pages/about-us/about-steps/about-steps";
import AboutTeam from "@/pages/about-us/about-team/about-team";
import AboutForWho from "@/pages/about-us/for-who/for-who";
import TextBlock from "@/sections/text-block/text-block";
import styles from "./dynamic.module.css";
import classNames from "classnames";
import CategoryCard from "../category-card/category-card";
import Link from "next/link";

const Dynamic = ({ component }: any) => {
  console.log(component);
  return component.map((el: any, index: number) => {
    switch (el.__component) {
      case "case-page.case-task":
        return <AboutSteps key={index} />;
      case "case-page.case-banner":
        return <AboutTeam key={index} />;
      case "case-page.case-solution":
        return <AboutTeam key={index} />;
      case "text-block.text-container":
        return (
          <TextBlock
            align={el.align}
            title={el.title}
            description={el.text}
            image={el.image}
            key={index}
          />
        );
      case "service-page.about-service": {
        return (
          <AboutForWho
            key={index}
            title={el.title}
            description={el.description}
          />
        );
      }
      case "service-page.advantages": {
        return (
          <AboutStages
            key={index}
            title="Преимущества покупки у нас"
            data={el.advantages}
          />
        );
      }
      case "service-page.related-products": {
        return (
          <ul key={index} className={classNames(styles.direction_categoryList)}>
            {el.data.subcategories.map((el: any) => (
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
        );
      }
    }

    return null;
  });
};

export default Dynamic;
