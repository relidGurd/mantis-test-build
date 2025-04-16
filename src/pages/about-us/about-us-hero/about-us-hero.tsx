"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./about-us-hero.module.css";
import Image from "next/image";
import Video from "@/ui-kit/video/video";

const AboutUsHero = () => {
  return (
    <section className="main-container">
      <Typography
        className={styles.about_heroTitle}
        variant="h1"
        outline="bold"
        register="40"
      >
        О нас
      </Typography>
      <div className={styles.aboutus_hero}>
        <div className={styles.about_block}>
          <div className={styles.about_videoContainer}>
            <Video url="/video.mp4" />
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
            <Typography
              variant="p"
              register="18"
              outline="regular"
              className={styles.about_textMargin}
            >
              В рамках партнёрских отношений мы готовы предложить вам варианты
              серверной виртуализации под ваши задачи, внедрим и развернём
              ИТ-инфраструктуру, а также осуществим миграцию с зарубежных
              продуктов, проведём обучение и окажем дальнейшую поддержку.
            </Typography>
            <Typography variant="p" register="18" outline="regular">
              В рамках задачи по импортозамещению оборудования и ПО серверной
              виртуализации Тринити предложит вам для внедрения максимально
              адаптированные и протестированные продукты.
            </Typography>
          </div>
        </div>
        <div className={styles.about_block}>
          <div>
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
            <Typography
              className={styles.about_textMargin}
              variant="p"
              register="18"
              outline="regular"
            >
              В рамках партнёрских отношений мы готовы предложить вам варианты
              серверной виртуализации под ваши задачи, внедрим и развернём
              ИТ-инфраструктуру, а также осуществим миграцию с зарубежных
              продуктов, проведём обучение и окажем дальнейшую поддержку.
            </Typography>
            <Typography variant="p" register="18" outline="regular">
              В рамках задачи по импортозамещению оборудования и ПО серверной
              виртуализации Тринити предложит вам для внедрения максимально
              адаптированные и протестированные продукты.
            </Typography>
          </div>
          <div className={styles.aboutus_heroImageContainer}>
            <Image
              className={styles.aboutus_heroImage}
              src={"/demo.png"}
              width={1250}
              height={650}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
