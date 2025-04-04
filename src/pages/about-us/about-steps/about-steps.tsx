"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./about-steps.module.css";
import Image from "next/image";

const AboutSteps = () => {
  return (
    <section>
      <div className="main-container">
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
      </div>
    </section>
  );
};

export default AboutSteps;
