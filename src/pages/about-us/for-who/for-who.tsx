"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./for-who.module.css";

const AboutForWho = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <section>
      <div className="main-container">
        <Typography
          className={styles.about_forWhoTitle}
          variant="h2"
          outline="semibold"
          register="32"
        >
          {title ? title : "Для кого мы работаем"}
        </Typography>
        {description ? (
          <div className={styles.about_forWhoTextContainer}>
            <Typography className={styles.about_forWhoText}>
              {description}
            </Typography>
          </div>
        ) : (
          <div className={styles.about_forWhoTextContainer}>
            <Typography className={styles.about_forWhoText}>
              Мы проектируем и развёртываем ИТ-инфраструктуру любой сложности
              и масштаба, в том числе на базе российских продуктов
              виртуализации.
            </Typography>
            <Typography className={styles.about_forWhoText}>
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
        )}
      </div>
    </section>
  );
};

export default AboutForWho;
