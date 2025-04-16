"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./intresting-products.module.css";
import ProductCard from "@/components/product-card/product-card";
import Typography from "@/ui-kit/typography/typography";

const demoList = [
  {
    id: 1,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
  {
    id: 2,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
  {
    id: 3,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
  {
    id: 4,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
  {
    id: 5,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
  {
    id: 6,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
];

const IntrestingProducts: React.FC<any> = ({
  productList,
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
          slidesPerView={slidesView}
          className={className}
          spaceBetween={20}
          wrapperTag="ul"
        >
          {demoList.map((el: any, index: number) => (
            <SwiperSlide key={index} tag="li">
              <ProductCard
                name={el.name}
                description={el.description}
                image={el.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default IntrestingProducts;
