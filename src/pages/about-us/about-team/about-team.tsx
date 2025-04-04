"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./about-team.module.css";
import Image from "next/image";

const AboutTeam = () => {
  return (
    <section className={styles.about_teamSection}>
      <div className="main-container">
        <Typography variant="h2" register="32" outline="bold">
          Наша команда
        </Typography>
        <ul className={styles.about_teamList}>
          <li className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/employe.png"}
                width={500}
                height={500}
                alt="Employe"
              />
            </div>
            <div className={styles.about_teamItem__info}>
              <Typography
                className={styles.about_teamItem_title}
                variant="span"
                outline="semibold"
                register="32"
              >
                Иван
              </Typography>
              <Typography>Иван</Typography>
            </div>
          </li>
          <li className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/employe.png"}
                width={500}
                height={500}
                alt="Employe"
              />
            </div>
            <div className={styles.about_teamItem__info}>
              <Typography
                className={styles.about_teamItem_title}
                variant="span"
                outline="semibold"
                register="32"
              >
                Иван
              </Typography>
              <Typography>Иван</Typography>
            </div>
          </li>
          <li className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/employe.png"}
                width={500}
                height={500}
                alt="Employe"
              />
            </div>
            <div className={styles.about_teamItem__info}>
              <Typography
                className={styles.about_teamItem_title}
                variant="span"
                outline="semibold"
                register="32"
              >
                Иван
              </Typography>
              <Typography>Иван</Typography>
            </div>
          </li>
          <li className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/employe.png"}
                width={500}
                height={500}
                alt="Employe"
              />
            </div>
            <div className={styles.about_teamItem__info}>
              <Typography
                className={styles.about_teamItem_title}
                variant="span"
                outline="semibold"
                register="32"
              >
                Иван
              </Typography>
              <Typography>Иван</Typography>
            </div>
          </li>
          <li className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/employe.png"}
                width={500}
                height={500}
                alt="Employe"
              />
            </div>
            <div className={styles.about_teamItem__info}>
              <Typography
                className={styles.about_teamItem_title}
                variant="span"
                outline="semibold"
                register="32"
              >
                Иван
              </Typography>
              <Typography>Иван</Typography>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutTeam;
