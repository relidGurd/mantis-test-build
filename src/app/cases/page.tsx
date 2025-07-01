import ProductCard from "@/components/product-card/product-card";
import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
import { getCases } from "@/api/cases/cases-page";
import Link from "next/link";
import qs from "qs";
import Pagination from "@/components/pagination/pagination";
import { Suspense } from "react";

const Cases = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;

  const CasesQwery = qs.stringify({
    populate: {
      image: {
        populate: "*",
      },
      cases_tag: {
        populate: "*",
      },
    },
    pagination: {
      page: page,
      pageSize: 10, // например, по 6 карточек
    },
  });
  const { data, meta } = await getCases(CasesQwery);

  console.log(meta);

  return (
    <main>
      <div className="main-container">
        <Typography
          className={styles.cases_title}
          variant="h1"
          register="40"
          outline="bold">
          Кейсы
        </Typography>
        <div></div>
        <section>
          <ul className={styles.cases_list}>
            {data.map((el: any) => (
              <li key={el.id}>
                <Link href={`/single-case/${el.slug}`}>
                  <ProductCard
                    image={el.image[0].url}
                    name={el.title}
                    description={el.description}
                    tag={el.cases_tag.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Suspense>
            <Pagination totalPages={meta.pagination.pageCount} />
          </Suspense>
        </section>
      </div>
    </main>
  );
};

export default Cases;
