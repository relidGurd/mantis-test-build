import ProductCard from "@/components/product-card/product-card";
import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
const demoList = [
  {
    id: 1,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
    tag: "Web-разработка",
  },
  {
    id: 2,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
    tag: "Web-разработка",
  },
  {
    id: 3,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
    tag: "Web-разработка",
  },
];

const Cases = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) => {
  const params = new URLSearchParams(
    Object.entries(searchParams).flatMap(([key, value]) =>
      Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
    )
  );

  const queryString = params.toString();
  console.log(queryString); // ← теперь работает как надо
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
            {demoList.map((el) => (
              <ProductCard
                key={el.id}
                image={el.image}
                name={el.name}
                description={el.description}
                tag={el.tag}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Cases;
