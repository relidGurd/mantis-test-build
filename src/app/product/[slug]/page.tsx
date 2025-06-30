import IntrestingProducts from "@/sections/intresting-products/intresting-products";
import styles from "./page.module.css";
import SinglePrdouct from "@/pages/single-product/single-product";
import { getProduct } from "@/api/products/products";
import qs from "qs";
const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const CasesQwery = qs.stringify({
    populate: {
      gallery: {
        populate: "*",
      },
      preview_image: {
        populate: "*",
      },
      specifications: {
        populate: "*",
      },
    },
  });
  const { data } = await getProduct((await params).slug, CasesQwery);

  return (
    <main>
      <SinglePrdouct
        title={data.title}
        description={data.description}
        availability={data.availability}
        price={data.price}
        gallery={data.gallery}
        id={data.id}
        preview_image={data.preview_image.url}
        specifications={data.specifications.tab}
      />
      {/* <IntrestingProducts title={"Вас может заинтересовать"} /> */}
    </main>
  );
};

export default ProductPage;
