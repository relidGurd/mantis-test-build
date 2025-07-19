"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./about-team.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutTeam = () => {
  return (
    <section className={styles.about_teamSection}>
      <div className="main-container">
        <Typography variant="h2" register="32" outline="bold">
          Наша команда
        </Typography>

        <Swiper
          slidesPerView={1.2}
          wrapperClass={styles.about_teamList}
          wrapperTag="ul"
          spaceBetween={16}
          className="swiper-container"
          breakpoints={{
            760: {
              slidesPerView: 2,
            },
            1240: {
              slidesPerView: 5,
            },
          }}>
          <SwiperSlide tag="li" className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/alc/1.jpeg"}
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
                register="32">
                Авдеев Антон
              </Typography>
              <Typography>Специалист по тремору</Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/alc/2.jpg"}
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
                register="32">
                Заверин Алексей
              </Typography>
              <Typography>Главный романтик</Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/alc/3.jpg"}
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
                register="32">
                Любятов Эдуард
              </Typography>
              <Typography>Ведущий дизайнер</Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/alc/4.jpg"}
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
                register="32">
                Ждунов Николай
              </Typography>
              <Typography>Коммерческий директор</Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li" className={styles.about_teamItem}>
            <div className={styles.about_teamImageContainer}>
              <Image
                className={styles.about_teamImage}
                src={"/alc/5.webp"}
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
                register="32">
                Джеймс Ауф
              </Typography>
              <Typography>Советник по иностранному рынку</Typography>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutTeam;
