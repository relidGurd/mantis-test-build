"use client";

import { title } from "process";
import styles from "./tab.module.css";
import Button from "@/ui-kit/button/button";
import { useState } from "react";
import Typography from "@/ui-kit/typography/typography";
const exampleData = [
  {
    id: 1,
    title: "Оборудование",
    description: "dfdfdf",
  },
  {
    id: 2,
    title: "Программные продукты",
    description: "dfdfdf",
  },
  {
    id: 3,
    title: "Индивидуальные решения",
    description: "dfdfdf",
  },
  {
    id: 4,
    title: "Web-разработка",
    description: "dfdfdf",
  },
  {
    id: 5,
    title: "Услуги",
    description: "dfdfdf",
  },
];

const Tab = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tab_informationContainer}>
        {exampleData.map(
          (el: any, index: number) =>
            activeIndex === index && (
              <div className={styles.information}>
                <Typography
                  variant="span"
                  register="48"
                  outline="bold"
                >{`0${el.id}`}</Typography>
                <Typography variant="p" outline="semibold" register="32">
                  saw 6x faster builds & deployment.  builds decreased by
                  99.96%. saw 50% reduction in infra admin effort.
                </Typography>
                <Button color="greenButton" label="Узнать больше" />
              </div>
            )
        )}
      </div>
      <div className={styles.tab_buttonsContainer}>
        {exampleData.map((el: any, index: number) => (
          <Button
            onClick={() => setActiveIndex(index)}
            className={styles.activeButton}
            color="buttonRound"
            label={el.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Tab;
