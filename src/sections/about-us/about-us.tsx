"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./about-us.module.css";

const AboutUs = () => {
  return (
    <section className="main-container">
      <div className={styles.aboutUsContainer}>
        <div>
          <Typography
            variant="h2"
            className={styles.aboutUsContainer_title}
            outline="bold"
          >
            О НАС
          </Typography>
        </div>

        <div>
          <Typography variant="p" outline="regular" register="24">
            Мы — IT-компания, специализирующаяся на комплексных решениях
            для бизнеса и госсектора. Партнёры ведущих разработчиков
            программного обеспечения и производителей оборудования. Наша цель —
            обеспечить высокотехнологичную поддержку вашего бизнеса,
            от автоматизации процессов до создания web-решений
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
