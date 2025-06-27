import Cart from "@/components/cart/cart";
import styles from "./page.module.css";
import IntrestingProducts from "@/sections/intresting-products/intresting-products";

const CartPage = () => {
  return (
    <main>
      <Cart />
      {/* <IntrestingProducts
        title={"Вас может заинтересовать"}
        slidesView={4}
        className={"swiper-container"}
      /> */}
    </main>
  );
};

export default CartPage;
