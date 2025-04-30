"use client";

import Button from "@/ui-kit/button/button";
import Typography from "@/ui-kit/typography/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./single-product.module.css";

const SinglePrdouct = () => {
  return (
    <div className="main-container">
      <div className={styles.prdouct_grid}>
        <div></div>
        <div>
          <Typography variant="h1">
            Материнская плата ASUS TUF Gaming Z590
          </Typography>
          <Typography variant="span">В наличии</Typography>
          <div>15 900 р</div>
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
