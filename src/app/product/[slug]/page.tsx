import IntrestingProducts from "@/sections/intresting-products/intresting-products";
import styles from "./page.module.css";
import SinglePrdouct from "@/pages/single-product/single-product";

const ProductPage = () => {
  return (
    <main>
      <SinglePrdouct />
      <IntrestingProducts title={"Вас может заинтересовать"} />;
    </main>
  );
};

export default ProductPage;
