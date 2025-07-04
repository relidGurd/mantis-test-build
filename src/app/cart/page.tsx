import Cart from "@/components/cart/cart";
import styles from "./page.module.css";
import IntrestingProducts from "@/sections/intresting-products/intresting-products";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import routes from "@/utils/breadcrumbs-massive";

const CartPage = () => {
  return (
    <div>
      <Breadcrumbs className="main-container" list={routes.cartList} />
      <Cart />
      {/* <IntrestingProducts
        title={"Вас может заинтересовать"}
        slidesView={4}
        className={"swiper-container"}
      /> */}
    </div>
  );
};

export default CartPage;
