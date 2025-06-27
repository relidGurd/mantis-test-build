"use client";

import { title } from "process";
import styles from "./tab.module.css";
import Button from "@/ui-kit/button/button";
import { useState } from "react";
import Typography from "@/ui-kit/typography/typography";
import { motion } from "motion/react";
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

  const motionTab = {
    init: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: [0.215, 0.61, 0.355, 1],
    },
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tab_informationContainer}>
        {exampleData.map(
          (el: any, index: number) =>
            activeIndex === index && (
              <motion.div
                key={index}
                className={styles.information}
                variants={motionTab}
                initial="init"
                animate={activeIndex === index ? "visible" : "init"}
                transition={{ ...motionTab.transition }}
              >
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
              </motion.div>
            )
        )}
      </div>
      <div className={styles.tab_buttonsContainer}>
        {exampleData.map((el: any, index: number) => (
          <div key={index} className={styles.tab_mobileTabs}>
            <Button
              onClick={() => setActiveIndex(index)}
              className={
                activeIndex === index
                  ? styles.tabBtbActive
                  : styles.activeButton
              }
              color="buttonRound"
              label={el.title}
            />
            <motion.div
              variants={motionTab}
              initial="init"
              animate={activeIndex === index ? "visible" : "init"}
              className={styles.information_mobile}
              transition={{ ...motionTab.transition }}
            >
              {activeIndex === index && (
                <div>
                  <Typography
                    className={styles.mobile_tab_title}
                    variant="span"
                    register="48"
                    outline="bold"
                  >{`0${el.id}`}</Typography>
                  <Typography
                    className={styles.mobile_tab_text}
                    variant="p"
                    outline="regular"
                    register="16"
                  >
                    saw 6x faster builds & deployment.  builds decreased by
                    99.96%. saw 50% reduction in infra admin effort.
                  </Typography>
                  <Button color="greenButton" label="Узнать больше" />
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
