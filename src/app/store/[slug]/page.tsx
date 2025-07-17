import { getSubCategory, getSubProducts } from "@/api/subcategory/subcategory";
import ProductCard from "@/components/product-card/product-card";
import qs from "qs";
import styles from "./sub.module.css";
import Pagination from "@/components/pagination/pagination";
import Link from "next/link";
import Typography from "@/ui-kit/typography/typography";
import FIlters from "@/sections/filters/filters-block";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ query?: string; page?: string }>;

const Computers = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams?: SearchParams;
}) => {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  // const page = Number(resolvedSearchParams.page) || 1;

  const query = resolvedSearchParams?.query || "";

  const page =
    query && query.length > 0 ? 1 : Number(resolvedSearchParams.page) || 1;

  const filters: any = {
    subcategory: {
      slug: {
        $eq: (await params).slug,
      },
    },
  };

  if (query) {
    try {
      const fixed = JSON.parse(query.replace(/'/g, '"')); // строка → массив

      if (Array.isArray(fixed) && fixed.length > 0) {
        filters.specifications = {
          tab: {
            property: {
              $in: fixed,
            },
          },
        };
      }
    } catch (err) {
      console.error("Ошибка парсинга фильтра:", err);
    }
  }

  const qweryP = qs.stringify({
    populate: {
      preview_image: {
        populate: "*",
      },
      subcategory: true,
      specifications: {
        populate: "*",
      },
    },
    filters,
    pagination: {
      page: page,
      pageSize: 10,
    },
  });

  const qweryC = qs.stringify({
    populate: "*",
  });

  const { data, meta } = await getSubProducts(qweryP);
  const { data: category } = await getSubCategory((await params).slug, qweryC);

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
