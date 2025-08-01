"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./partners.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/free-mode";

const Partners = () => {
  return (
    <section className={styles.partners_section}>
      <div className="main-container">
        <Typography variant="h2" register="32" outline="semibold">
          Наши партнеры
        </Typography>

        <div className={styles.partners_swiperContainer}>
          <Swiper
            freeMode={false}
            breakpoints={{
              760: {
                slidesPerView: 4,
              },
              1240: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay, FreeMode]}
            slidesPerView={1.2}
            spaceBetween={20}
            wrapperTag="ul"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="swiper-container"
          >
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    «1С» Компания
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    Официальный партнер
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.partners_card}>
                <div className={styles.partners_cardImageContainer}>
                  <Image
                    className={styles.partners_cardImage}
                    src={"/1c-example.svg"}
                    width={70}
                    height={70}
                    alt="1c logo"
                  />
                </div>
                <div className={styles.partners_info}>
                  <Typography variant="span" register="14" outline="semibold">
                    Name
                  </Typography>
                  <Typography variant="span" register="12" outline="regular">
                    description
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
