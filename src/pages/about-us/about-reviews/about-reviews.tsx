import styles from "./about-reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import ReviewItem from "@/components/review-item/review-item";
import classNames from "classnames";
import Typography from "@/ui-kit/typography/typography";
const AboutReviews = () => {
  return (
    <section className={styles.aboutReviews_section}>
      <div
        className={classNames(
          styles.aboutReviews_section_swiperContainer,
          "main-container"
        )}
      >
        <div>
          <Typography variant="h2" outline="semibold" register="32">
            Отзывы о нас
          </Typography>
        </div>
        <div className={styles.gradient}>
          <Swiper
            freeMode={false}
            breakpoints={{
              760: {
                slidesPerView: 2,
              },
              1240: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, FreeMode]}
            slidesPerView={1}
            spaceBetween={16}
            wrapperTag="ul"
            className="swiper-container"
          >
            <SwiperSlide tag="li">
              <ReviewItem size="small" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <ReviewItem size="small" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <ReviewItem size="small" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <ReviewItem size="small" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AboutReviews;
