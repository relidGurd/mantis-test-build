"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./about-steps.module.css";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Arrow } from "@/icons/icons";
import classNames from "classnames";
const exampleData = [
  {
    id: 1,
    year: "2024",
    information:
      "Наш магазин начал свой путь как инициатива по организации новогодних ярмарок, постепенно превратившись в постоянное пространство для местных брендов в Ташкенте. Открытый в декабре прошлого года, магазин собрал под одной крышей 56 брендов одежды, аксессуаров, украшений и товаров для дома, предлагая участникам выгодные условия аренды и поддержку в продвижении.",
  },
  {
    id: 2,
    year: "2022",
    information:
      "Наш магазин начал свой путь как инициатива по организации новогодних ярмарок, постепенно превратившись в постоянное пространство для местных брендов в Ташкенте. Открытый в декабре прошлого года, магазин собрал под одной крышей 56 брендов одежды, аксессуаров, украшений и товаров для дома, предлагая участникам выгодные условия аренды и поддержку в продвижении.",
  },
  {
    id: 3,
    year: "2021",
    information:
      "Наш магазин начал свой путь как инициатива по организации новогодних ярмарок, постепенно превратившись в постоянное пространство для местных брендов в Ташкенте. Открытый в декабре прошлого года, магазин собрал под одной крышей 56 брендов одежды, аксессуаров, украшений и товаров для дома, предлагая участникам выгодные условия аренды и поддержку в продвижении.",
  },
];

const AboutSteps = () => {
  const [activeTab, setActiveTab] = useState(1);

  const motionTab = {
    init: {
      opacity: 0,
      y: -10,
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
    <section>
      <div className="main-container">
        <Typography
          className={styles.about_steps}
          variant="h2"
          outline="semibold"
          register="32"
        >
          Наша история
        </Typography>
        <ul className={styles.about_stepsItemList}>
          <li className={styles.about_stepsItem}>
            <Typography outline="bold" register="48">
              2022 год
            </Typography>
            <div className={styles.about_stepsBullets}>
              <div className={styles.about_stepsBullet}></div>
            </div>
            <div>
              <Typography className={styles.about_stepsDescription}>
                Наш магазин начал свой путь как инициатива по организации
                новогодних ярмарок, постепенно превратившись в постоянное
                пространство для местных брендов в Ташкенте. Открытый в декабре
                прошлого года, магазин собрал под одной крышей 56 брендов
                одежды, аксессуаров, украшений и товаров для дома, предлагая
                участникам выгодные условия аренды и поддержку в продвижении.
              </Typography>
              <Typography>
                Teplo Store успешно сочетает в себе концепцию магазина
                с поддержкой локальных производителей, обеспечивая высокий
                уровень организации и внимание к деталям в каждом аспекте своей
                деятельности.
              </Typography>
            </div>
          </li>
          <li className={styles.about_stepsItem}>
            <Typography outline="bold" register="48">
              2023 год
            </Typography>
            <div className={styles.about_stepsBullets}>
              <div className={styles.about_stepsBullet}></div>
            </div>
            <div>
              <Typography className={styles.about_stepsDescription}>
                Наш магазин начал свой путь как инициатива по организации
                новогодних ярмарок, постепенно превратившись в постоянное
                пространство для местных брендов в Ташкенте. Открытый в декабре
                прошлого года, магазин собрал под одной крышей 56 брендов
                одежды, аксессуаров, украшений и товаров для дома, предлагая
                участникам выгодные условия аренды и поддержку в продвижении.
              </Typography>
              <div className={styles.about_stepsImageContainer}>
                <Image
                  className={styles.about_stepsImage}
                  src={"/demo.png"}
                  width={1440}
                  height={800}
                  alt="demo"
                />
              </div>
              <Typography>
                Teplo Store успешно сочетает в себе концепцию магазина
                с поддержкой локальных производителей, обеспечивая высокий
                уровень организации и внимание к деталям в каждом аспекте своей
                деятельности.
              </Typography>
            </div>
          </li>
          <li className={styles.about_stepsItem}>
            <Typography outline="bold" register="48">
              2024 год
            </Typography>
            <div className={styles.about_stepsBullets}>
              <div className={styles.about_stepsBullet}></div>
            </div>
            <div>
              <Typography className={styles.about_stepsDescription}>
                Наш магазин начал свой путь как инициатива по организации
                новогодних ярмарок, постепенно превратившись в постоянное
                пространство для местных брендов в Ташкенте. Открытый в декабре
                прошлого года, магазин собрал под одной крышей 56 брендов
                одежды, аксессуаров, украшений и товаров для дома, предлагая
                участникам выгодные условия аренды и поддержку в продвижении.
              </Typography>
              <Typography>
                Teplo Store успешно сочетает в себе концепцию магазина
                с поддержкой локальных производителей, обеспечивая высокий
                уровень организации и внимание к деталям в каждом аспекте своей
                деятельности.
              </Typography>
            </div>
          </li>
        </ul>

        {exampleData.map((el: any, index: number) => (
          <div key={index} className={styles.tab_container}>
            <button
              className={styles.tab_btn}
              onClick={() => setActiveTab(el.id)}
            >
              <span>{el.year}</span>

              <span
                className={classNames(
                  styles.tab_arrow,
                  activeTab === el.id ? styles.tab_arrow_active : ""
                )}
              >
                <Arrow />
              </span>
            </button>
            {activeTab === el.id && (
              <motion.div
                variants={motionTab}
                initial="init"
                animate={activeTab === el.id ? "visible" : "init"}
                className={styles.tab_text}
              >
                {el.information}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSteps;
