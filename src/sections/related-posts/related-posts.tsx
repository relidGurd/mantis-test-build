"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./related-posts.module.css";
import Typography from "@/ui-kit/typography/typography";
import Link from "next/link";
import MiniPostCard from "@/components/mini-post-card/mini-post-card";

interface IRelatedPosts {
  title?: string;
  posts_list: any;
  slidesView?: number;
  className?: string;
}

const RelatedPosts: React.FC<IRelatedPosts> = ({
  title = "Вас может заинтересовать",
  posts_list,
  slidesView = 4.2,
  className,
}) => {
  return (
    <section style={{ overflow: "hidden", paddingTop: "0px" }}>
      <div>
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
          {posts_list.map((el: any) => (
            <SwiperSlide className={styles.swiper_slide} key={el.id} tag="li">
              <Link
                className={styles.swiper_slide_link}
                href={`/blog-page/${el.slug}`}
              >
                <MiniPostCard
                  tag={el.tag}
                  title={el.title}
                  description={el.seo_description[0].children[0].text}
                  image={el.image.url}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedPosts;
