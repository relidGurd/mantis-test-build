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
import { useCart } from "@/store/cart";
import classNames from "classnames";

const SinglePrdouct: React.FC<Product> = ({
  id,
  title,
  description,
  availability,
  price,
  gallery,
  preview_image,
  specifications,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const [tabInfo, setTabInfo] = useState(true);
  const { addItem } = useCart((elem: any) => elem);

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
            autoHeight={true}>
            {gallery?.map((el) => (
              <SwiperSlide className={styles.slide_gallery_image_container}>
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
            className={classNames(
              styles.slide_main_image_container,
              styles.previewGrid
            )}>
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
          <div className={styles.in_sales_container}>
            <span
              className={classNames(
                styles.in_sales_circle,
                availability
                  ? styles.in_sales_circle_green
                  : styles.in_sales_circle_red
              )}></span>
            <Typography variant="span">
              {availability ? "В наличии" : "Нет в наличии"}
            </Typography>
          </div>

          <Typography
            className={styles.product_price}
            register="32"
            outline="bold">
            {price} ₽
          </Typography>
          {availability && (
            <div className={styles.productButtonsContainer}>
              <Button
                onClick={() =>
                  addItem({
                    id,
                    image: preview_image,
                    title,
                    price,
                    quantity: 1,
                  })
                }
                label="Добавить в корзину"
                color="greenButton"
              />
              <Button label="Купить в 1 клик" color="blackButton" />
            </div>
          )}

          <div>
            <ul className={styles.tab_btn_list}>
              <li>
                <Button
                  onClick={() => setTabInfo(true)}
                  className={classNames(tabInfo === true && styles.btn_active)}
                  label="Описнание"
                  color="blackButton"
                />
              </li>
              <li>
                <Button
                  onClick={() => setTabInfo(false)}
                  className={classNames(tabInfo === false && styles.btn_active)}
                  label="Характеристики"
                  color="blackButton"
                />
              </li>
            </ul>

            {tabInfo ? (
              <Typography>{description}</Typography>
            ) : (
              <div className={styles.specifications_container}>
                <table className={styles.specifications_table}>
                  <tbody>
                    {specifications ? (
                      specifications.tab?.map((el: any) => (
                        <tr key={el.id}>
                          <td className={styles.specifications_cell}>
                            {el.title}
                          </td>
                          <td className={styles.specifications_cell}>
                            {el.property}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className={styles.specifications_cell}>
                          Характеристики не указаны
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePrdouct;
