// import Cart from "@/components/cart/cart";
// import IntrestingProducts from "@/sections/intresting-products/intresting-products";
// import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
// import routes from "@/utils/breadcrumbs-massive";
// import qs from "qs";
// import { getRelatedProducts } from "@/api/products/products";
// const CartPage = async () => {
//   const relatedQwery = qs.stringify({
//     populate: {
//       products: {
//         populate: {
//           preview_image: true,
//         },
//       },
//     },
//   });

//   const { data: relatedProducts } = await getRelatedProducts(relatedQwery);

//   return (
//     <div>
//       <Breadcrumbs className="main-container" list={routes.cartList} />
//       <Cart />
//       <IntrestingProducts
//         product_list={relatedProducts.products}
//         title={"Вас может заинтересовать"}
//         slidesView={4}
//         className={"swiper-container"}
//       />
//     </div>
//   );
// };

// export default CartPage;
