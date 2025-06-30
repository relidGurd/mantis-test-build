"use client";

import Button from "@/ui-kit/button/button";
import Typography from "@/ui-kit/typography/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./single-product.module.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { Product } from "./product-types";
import { data } from "motion/react-client";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

//test
const SinglePrdouct: React.FC<Product> = ({
  title,
  description,
  availability,
  price,
  gallery,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="main-container">
      <div className={styles.prdouct_grid}>
        <div className={styles.productImageCarouselContainer}>
          <Swiper
            breakpoints={{
              "1200": {
                direction: "vertical",
                spaceBetween: 10,
                slidesPerView: 4,
              },
            }}
            direction={"horizontal"}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.thumbsGrid}
            autoHeight={true}
          >
            {gallery?.map((el) => (
              <SwiperSlide>
                <Image
                  width={1200}
                  height={1200}
                  alt=""
                  className={styles.slideImage}
                  src={`https://cms.mantis-185.ru${el.url}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.previewGrid}
          >
            {gallery?.map((el) => (
              <SwiperSlide>
                <Image
                  width={1200}
                  height={1200}
                  alt=""
                  className={styles.slideImage}
                  src={`https://cms.mantis-185.ru${el.url}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Typography variant="h1" register="40">
            {title}
          </Typography>
          <Typography className={styles.inSales} variant="span">
            {availability ? "В наличии" : "Нет в наличии"}
          </Typography>
          <Typography
            className={styles.product_price}
            register="32"
            outline="bold"
          >
            {price} р
          </Typography>
          <div className={styles.productButtonsContainer}>
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
