"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./about-stages.module.css";
import { image } from "motion/react-client";
import Image from "next/image";

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
      <div className="main-container">
        <Typography variant="h2">{title}</Typography>
        <ul className={styles.stages_list}>
          {data.map((el, index: number) => (
            <li key={el.id} className={styles.stages_listItem}>
              {el.image ? (
                <div className={styles.stages_listItem__imageContainer}>
                  <Image
                    className={styles.stages_listItem__image}
                    src={el.image}
                    width={54}
                    height={54}
                    alt="sateges item"
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
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutStages;
