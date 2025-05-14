import ProductCard from "@/components/product-card/product-card";
import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
import { getCases } from "@/api/cases/cases-page";
import Link from "next/link";
import qs from "qs";
import Pagination from "@/components/pagination/pagination";

const Cases = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";

  const CasesQwery = qs.stringify({
    populate: {
      image: {
        populate: "*",
      },
      case_tag: {
        populate: "*",
      },
    },
    pagination: {
      page: Number(page),
      pageSize: 1, // например, по 6 карточек
    },
  });
  const { data, meta } = await getCases(CasesQwery);

  console.log(data);
  return (
    <main>
      <div className="main-container">
        <Typography
          className={styles.cases_title}
          variant="h1"
          register="40"
          outline="bold"
        >
          Кейсы
        </Typography>
        <div></div>
        <section>
          <ul className={styles.cases_list}>
            {data.map((el: any) => (
              <li key={el.id}>
                <Link href={`/single-case/${el.slug}`}>
                  <ProductCard
                    image={el.image[0].formats.small.url}
                    name={el.title}
                    description={el.description}
                    tag={el.case_tag.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Pagination totalPages={meta.pagination.total} />
        </section>
      </div>
    </main>
  );
};

export default Cases;
