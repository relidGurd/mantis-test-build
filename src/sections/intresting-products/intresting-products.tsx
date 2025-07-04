"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./intresting-products.module.css";
import ProductCard from "@/components/product-card/product-card";
import Typography from "@/ui-kit/typography/typography";
import Link from "next/link";

interface IRelatedProductCard {
  title?: string;
  product_list: any;
  slidesView?: number;
  className?: string;
}

const IntrestingProducts: React.FC<IRelatedProductCard> = ({
  product_list,
  slidesView = 4,
  className,
  title,
}) => {
  return (
    <section style={{ overflow: "hidden" }}>
      <div className="main-container">
        {title && (
          <div style={{ marginBottom: "40px" }}>
            <Typography variant="h2" register="32" outline="semibold">
              {title}
            </Typography>
          </div>
        )}

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          className={className}
          wrapperTag="ul"
          breakpoints={{
            760: {
              slidesPerView: 3,
            },
            1240: {
              slidesPerView: slidesView,
            },
          }}
        >
          {product_list.map((el: any) => (
            <SwiperSlide className={styles.swiper_slide} key={el.id} tag="li">
              <Link
                className={styles.swiper_slide_link}
                href={`/product/${el.slug}`}
              >
                <ProductCard
                  className={styles.swiper_slide_card}
                  name={el.title}
                  description={el.description}
                  image={`${el.preview_image.url}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default IntrestingProducts;
