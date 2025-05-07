"use client";

import Button from "@/ui-kit/button/button";
import Typography from "@/ui-kit/typography/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./single-product.module.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
const SinglePrdouct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container">
      <div className={styles.prdouct_grid}>
        <div className={styles.productImageCarouselContainer}>
          <Swiper
            direction={"vertical"}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.thumbsGrid}
          >
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src="https://swiperjs.com/demos/images/nature-1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src="https://swiperjs.com/demos/images/nature-2.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src="https://swiperjs.com/demos/images/nature-4.jpg"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.previewGrid}
          >
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src="https://swiperjs.com/demos/images/nature-1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src="https://swiperjs.com/demos/images/nature-2.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src="https://swiperjs.com/demos/images/nature-4.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Typography variant="h1" register="40">
            Материнская плата ASUS TUF Gaming Z590
          </Typography>
          <Typography className={styles.inSales} variant="span">
            В наличии
          </Typography>
          <Typography
            className={styles.product_price}
            register="32"
            outline="bold"
          >
            15 900 р
          </Typography>
          <div>
            <Button label="Добавить в корзину" color="greenButton" />
            <Button label="Добавить в корзину" color="blackButton" />
          </div>
          <div>
            <Swiper slidesPerView={6} wrapperTag="ul">
              <SwiperSlide tag="li">
                <div>Описание</div>
              </SwiperSlide>
              <SwiperSlide tag="li">
                <div>Характеристики</div>
              </SwiperSlide>
            </Swiper>
            <Typography>
              ASUS TUF Gaming Z590 — это надёжная и мощная материнская плата
              для сборки игрового ПК или рабочей станции. Благодаря прочной
              конструкции, поддержке новейших технологий и расширенным
              возможностям охлаждения, она обеспечит стабильную работу
              даже в самых требовательных сценариях. Отличный выбор для геймеров
              и энтузиастов!
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePrdouct;
