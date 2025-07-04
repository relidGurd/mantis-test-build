import IntrestingProducts from "@/sections/intresting-products/intresting-products";
import styles from "./page.module.css";
import SinglePrdouct from "@/pages/single-product/single-product";
import { getProduct, getRelatedProducts } from "@/api/products/products";
import qs from "qs";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const CasesQwery = qs.stringify({
    populate: {
      preview_image: {
        populate: "*",
      },
    },
  });

  const { data } = await getProduct(slug, CasesQwery);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [`https://cms.mantis-185.ru${data.preview_image.url}`],
    },
  };
}

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

  const relatedQwery = qs.stringify({
    populate: {
      products: {
        populate: {
          preview_image: true,
        },
      },
    },
  });
  const { data } = await getProduct((await params).slug, CasesQwery);
  const { data: relatedProducts } = await getRelatedProducts(relatedQwery);

  return (
    <div>
      <SinglePrdouct
        title={data.title}
        description={data.description}
        availability={data.availability}
        price={data.price}
        gallery={data.gallery}
        id={data.id}
        preview_image={data.preview_image.url}
        specifications={data.specifications}
      />
      <IntrestingProducts
        product_list={relatedProducts.products}
        className={"swiper-container"}
        title={"Вас может заинтересовать"}
      />
    </div>
  );
};

export default ProductPage;
