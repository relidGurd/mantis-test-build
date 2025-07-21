"use client";
import styles from "./tags.module.css";
import {
  useRouter,
  useSearchParams,
  usePathname,
  redirect,
} from "next/navigation";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

interface ITagItem {
  title: string;
  url?: string;
}

interface ITags {
  tags: ITagItem[];
}

const Tags: React.FC<ITags> = ({ tags }) => {
  const searchParams: any = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentQuery = searchParams.get("query");

  console.log(currentQuery);
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={20}
      className="swiper-container"
      wrapperTag="ul"
      breakpoints={{
        760: {
          slidesPerView: 3,
        },
        1240: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide className={styles.swiper_slide} tag="li">
        <button
          className={classNames(
            styles.tag_button,
            currentQuery === null ? styles.tag_button_active : ""
          )}
          onClick={() => handleSearch("")}
        >
          Все
        </button>
      </SwiperSlide>
      {tags.map((el: any) => (
        <SwiperSlide className={styles.swiper_slide} key={el.id} tag="li">
          <button
            className={classNames(
              styles.tag_button,
              currentQuery === el.title ? styles.tag_button_active : ""
            )}
            onClick={() => handleSearch(el.title)}
          >
            {el.title}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Tags;

{
  /* <ul className={styles.tags_container}>
        <li>
          <button
            className={classNames(
              styles.tag_button,
              currentQuery === null ? styles.tag_button_active : ""
            )}
            onClick={() => handleSearch("")}>
            Все
          </button>
        </li>
        {tags.map((el: ITagItem, index: number) => (
          <li key={index}>
            <button
              className={classNames(
                styles.tag_button,
                currentQuery === el.title ? styles.tag_button_active : ""
              )}
              onClick={() => handleSearch(el.title)}>
              {el.title}
            </button>
          </li>
        ))}
      </ul> */
}
