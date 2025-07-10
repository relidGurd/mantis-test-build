import classNames from "classnames";
import styles from "./order.module.css";
import Typography from "@/ui-kit/typography/typography";
import OrderForm from "@/components/order-form/order-form";
import IntrestingProducts from "@/sections/intresting-products/intresting-products";
import qs from "qs";
import { getRelatedProducts } from "@/api/products/products";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mantis | Оформление заказа",
  description:
    "У нас можно купить 1С под ключ в Запорожской области, Херсонской области и Крыму.",
};

export default async function Order() {
  const relatedQwery = qs.stringify({
    populate: {
      products: {
        populate: {
          preview_image: true,
        },
      },
    },
  });
  const { data: relatedProducts } = await getRelatedProducts(relatedQwery);

  return (
    <>
      <div className={classNames("main-container")}>
        <Typography outline="bold" register="40" variant="h1">
          Оформление заказа
        </Typography>
        <OrderForm />
      </div>
      <IntrestingProducts
        className={"swiper-container"}
        product_list={relatedProducts.products}
        title="Вас может заинтересовать"
      />
    </>
  );
}
