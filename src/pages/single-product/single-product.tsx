"use client";

import Button from "@/ui-kit/button/button";
import Typography from "@/ui-kit/typography/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./single-product.module.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Product } from "@/types/product-types";

const SinglePrdouct: React.FC<Product> = ({
  title,
  description,
  availability,
  price,
  gallery,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const [tabInfo, setTabInfo] = useState(true);

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
            <ul className={styles.tab_btn_list}>
              <li>
                <Button
                  onClick={() => setTabInfo(true)}
                  label="Описнание"
                  color="blackButton"
                />
              </li>
              <li>
                <Button
                  onClick={() => setTabInfo(false)}
                  label="Характеристики"
                  color="blackButton"
                />
              </li>
            </ul>

            {tabInfo ? (
              <Typography>{description}</Typography>
            ) : (
              <div>Характеристики</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePrdouct;
