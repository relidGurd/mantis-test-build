import { getSubProducts } from "@/api/subcategory/subcategory";
import ProductCard from "@/components/product-card/product-card";
import qs from "qs";
import styles from "./sub.module.css";
import Pagination from "@/components/pagination/pagination";
import { equal } from "assert";

type Params = Promise<{ slug: string; page?: string }>;
type SearchParams = Promise<{ query?: string; page?: string }>;

const Computers = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams?: SearchParams;
}) => {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const page = Number(resolvedSearchParams.page) || 1;

  const qweryP = qs.stringify({
    populate: {
      preview_image: {
        populate: "*",
      },
    },
    pagination: {
      page: page,
      pageSize: 10, // например, по 6 карточек
    },
  });

  const { data, meta } = await getSubProducts(qweryP);

  return (
    <div>
      <h1>{data.title}</h1>

      <div className={styles.product_grid}>
        {data.map((el: any) => (
          <ProductCard
            key={el.id}
            price={el.price}
            name={el.title}
            description={el.description}
            image={el.preview_image.url}
          />
        ))}
      </div>
      <Pagination
        variant={`store/${(await params).slug}`}
        totalPages={meta.pagination.pageCount}
      />
    </div>
  );
};

export default Computers;
