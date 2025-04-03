"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./about-us-hero.module.css";
import Image from "next/image";

const AboutUsHero = () => {
  return (
    <section className="main-container">
      <div className={styles.aboutus_hero}>
        <div className={styles.about_block}>
          <div className={styles.about_videoContainer}>
            <video className={styles.about_video} width="100%" controls>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.about_videoText}>
            <Typography
              className={styles.about_textMargin}
              variant="p"
              register="18"
              outline="regular"
            >
              Мы проектируем и развёртываем ИТ-инфраструктуру любой сложности
              и масштаба, в том числе на базе российских продуктов
              виртуализации.
            </Typography>
            <Typography className={styles.about_textMargin}>
              В рамках партнёрских отношений мы готовы предложить вам варианты
              серверной виртуализации под ваши задачи, внедрим и развернём
              ИТ-инфраструктуру, а также осуществим миграцию с зарубежных
              продуктов, проведём обучение и окажем дальнейшую поддержку.
            </Typography>
            <Typography>
              В рамках задачи по импортозамещению оборудования и ПО серверной
              виртуализации Тринити предложит вам для внедрения максимально
              адаптированные и протестированные продукты.
            </Typography>
          </div>
        </div>
        <div className={styles.about_block}>
          <div>
            <Typography>
              В рамках задачи по импортозамещению оборудования и ПО серверной
              виртуализации Тринити предложит вам для внедрения максимально
              адаптированные и протестированные продукты.
            </Typography>
            <Typography>
              В рамках задачи по импортозамещению оборудования и ПО серверной
              виртуализации Тринити предложит вам для внедрения максимально
              адаптированные и протестированные продукты.
            </Typography>
            <Typography>
              В рамках задачи по импортозамещению оборудования и ПО серверной
              виртуализации Тринити предложит вам для внедрения максимально
              адаптированные и протестированные продукты.
            </Typography>
          </div>
          <div>
            <Image src={"/"} width={250} height={250} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
