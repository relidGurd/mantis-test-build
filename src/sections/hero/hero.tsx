"use client";
import Button from "@/ui-kit/button/button";
import styles from "./hero.module.css";
import Typography from "@/ui-kit/typography/typography";

const Hero = () => {
  return (
    <section className={`main-container`}>
      <div className={styles.heroContainer}>
        <div className={styles.hero_description}>
          <Typography className={styles.gradientTitle} variant="h1">
            Лучшие IT-решения <br /> для вашего бизнеса
          </Typography>
          <Typography
            className={styles.hero_text}
            register="18"
            outline="regular"
          >
            Автоматизируем процессы, обеспечиваем безопасность и упрощаем
            управление с помощью передовых технологий
          </Typography>
        </div>
        <div className={styles.hero_buttonsContainer}>
          <Button label="Подробнее" />
          <Button label="Оставить заявку" color="greenButton" />
        </div>
        <ul className={styles.hero_advContainer}>
          <li className={styles.hero_advItem}>
            <Typography register="40" outline="bold" variant="span">
              200+
            </Typography>
            <Typography
              outline="regular"
              register="18"
              className={styles.hero_advText}
              variant="span"
            >
              Параметр
            </Typography>
          </li>
          <li className={styles.hero_advItem}>
            <Typography register="40" outline="bold" variant="span">
              200+
            </Typography>
            <Typography
              outline="regular"
              register="18"
              className={styles.hero_advText}
              variant="span"
            >
              Параметр
            </Typography>
          </li>
          <li className={styles.hero_advItem}>
            <Typography register="40" outline="bold" variant="span">
              200+
            </Typography>
            <Typography
              outline="regular"
              register="18"
              className={styles.hero_advText}
              variant="span"
            >
              Параметр
            </Typography>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
