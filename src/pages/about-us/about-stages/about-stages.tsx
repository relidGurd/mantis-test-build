"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./about-stages.module.css";
import Image from "next/image";
import RiseUpAnimation from "@/animation/rise-up-animation/rise-up-animation";

interface IAboutStagesData {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface IAboutStages {
  title: string;
  data: IAboutStagesData[];
}

const AboutStages: React.FC<IAboutStages> = ({ title, data }) => {
  return (
    <section>
      <RiseUpAnimation delay={0.2}>
        <div className="main-container">
          <Typography variant="h2" outline="semibold" register="32">
            {title}
          </Typography>

          <ul className={styles.stages_list}>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((el, index: number) => (
                // <RiseUpAnimation key={el.id} delay={0.2 + index / 10}>
                <li key={el.id} className={styles.stages_listItem}>
                  {el.image ? (
                    <div className={styles.stages_listItem__imageContainer}>
                      <Image
                        className={styles.stages_listItem__image}
                        src={el.image}
                        width={54}
                        height={54}
                        alt="stages item"
                      />
                    </div>
                  ) : (
                    <div className={styles.stages_listItem__number}>
                      <Typography variant="span" register="48" outline="bold">
                        {`0${index + 1}`}
                      </Typography>
                    </div>
                  )}

                  <div className={styles.stages_listItem__description}>
                    <Typography
                      outline="bold"
                      variant="span"
                      register="20"
                      className={styles.stages_listItem__title}
                    >
                      {el.title}
                    </Typography>
                    <Typography>{el.description}</Typography>
                  </div>
                </li>
                // </RiseUpAnimation>
              ))
            ) : (
              <li>Нет данных для отображения</li>
            )}
          </ul>
        </div>
      </RiseUpAnimation>
    </section>
  );
};

export default AboutStages;
