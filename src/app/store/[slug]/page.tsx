import { getSubCategory, getSubProducts } from "@/api/subcategory/subcategory";
import ProductCard from "@/components/product-card/product-card";
import styles from "./sub.module.css";
import Pagination from "@/components/pagination/pagination";
import Link from "next/link";
import Typography from "@/ui-kit/typography/typography";
import FIlters from "@/sections/filters/filters-block";
import { StoreFiltersQuery } from "./helper";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{
  query?: string;
  sort?: string;
  price?: string;
  page?: string;
}>;

const Computers = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams?: SearchParams;
}) => {
  const resolvedSearchParams = searchParams ? await searchParams : {};

  const query = resolvedSearchParams?.query || "";
  const sort = resolvedSearchParams?.sort || "";
  const price = resolvedSearchParams?.price || "";

  const slug = (await params).slug;
  const page =
    query && query.length > 0 ? 1 : Number(resolvedSearchParams.page) || 1;

  const [qweryProduct, qweryCategory] = StoreFiltersQuery(
    slug,
    query,
    page,
    sort
  );

  const { data, meta } = await getSubProducts(qweryProduct);
  const { data: category } = await getSubCategory(slug, qweryCategory);

  return (
    <div className={"main-container"}>
      <Typography
        className={styles.subcategory_page_title}
        variant="h1"
        register="40"
        outline="bold"
      >
        {category.title}
      </Typography>
      <div className={styles.subcategory_page_grid}>
        <FIlters filter_list={category.filters} />
        <div>
          <div className={styles.product_grid}>
            {data.map((el: any) => (
              <Link key={el.id} href={`/product/${el.slug}`}>
                <ProductCard
                  price={el.price}
                  name={el.title}
                  description={el.description}
                  image={el.preview_image.url}
                />
              </Link>
            ))}
          </div>
          <Pagination
            variant={`store/${(await params).slug}`}
            totalPages={meta.pagination.pageCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Computers;
