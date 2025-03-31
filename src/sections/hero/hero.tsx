"use client";
import Button from "@/ui-kit/button/button";
import styles from "./hero.module.css";
import Typography from "@/ui-kit/typography/typography";

const Hero = () => {
  return (
    <section className={`main-container`}>
      <div className={styles.heroContainer}>
        <div className={styles.hero_description}>
          <Typography
            className={styles.gradientTitle}
            variant="h1"
            basicStyle="">
            Лучшие IT-решения для вашего бизнеса
          </Typography>
          <Typography basicStyle="">
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
            <Typography variant="span" basicStyle="">
              200
            </Typography>
            <Typography variant="span" basicStyle="">
              Параметр
            </Typography>
          </li>
          <li className={styles.hero_advItem}>
            <Typography variant="span" basicStyle="">
              200
            </Typography>
            <Typography variant="span" basicStyle="">
              Параметр
            </Typography>
          </li>
          <li className={styles.hero_advItem}>
            <Typography variant="span" basicStyle="">
              200
            </Typography>
            <Typography variant="span" basicStyle="">
              Параметр
            </Typography>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
