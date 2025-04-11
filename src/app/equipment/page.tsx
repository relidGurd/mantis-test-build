import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
import ProductCard from "@/components/product-card/product-card";
import MainForm from "@/components/main-form/main-form";

const demoList = [
  {
    id: 1,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
  {
    id: 2,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
  {
    id: 3,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
  {
    id: 4,
    name: "Test",
    description:
      "Автоматизируем процессы, обеспечиваем безопасность и упрощаем управление. Автоматизируем процессы, обеспечиваем",
    image: "/demo-prod.png",
  },
];

const Equipment = () => {
  return (
    <main>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h1" outline="bold" register="48">
          Оборудовние
        </Typography>
      </div>
      <section className="main-container">
        <div>
          <Typography
            className={styles.equipment_title}
            variant="h2"
            outline="bold"
            register="32"
          >
            Компьютерная техника
          </Typography>
          <ul className={styles.equipment_list}>
            {demoList.map((el) => (
              <ProductCard
                key={el.id}
                image={el.image}
                name={el.name}
                description={el.description}
              />
            ))}
          </ul>
        </div>
      </section>
      <section className="main-container">
        <div>
          <Typography
            className={styles.equipment_title}
            variant="h2"
            outline="bold"
            register="32"
          >
            Компьютерная техника
          </Typography>
          <ul className={styles.equipment_list}>
            {demoList.map((el) => (
              <ProductCard
                key={el.id}
                image={el.image}
                name={el.name}
                description={el.description}
              />
            ))}
          </ul>
        </div>
      </section>
      <section className="main-container">
        <div>
          <Typography
            className={styles.equipment_title}
            variant="h2"
            outline="bold"
            register="32"
          >
            Компьютерная техника
          </Typography>
          <ul className={styles.equipment_list}>
            {demoList.map((el) => (
              <ProductCard
                key={el.id}
                image={el.image}
                name={el.name}
                description={el.description}
              />
            ))}
          </ul>
        </div>
      </section>
      <section className="main-container">
        <div>
          <Typography
            className={styles.equipment_title}
            variant="h2"
            outline="bold"
            register="32"
          >
            Компьютерная техника
          </Typography>
          <ul className={styles.equipment_list}>
            {demoList.map((el) => (
              <ProductCard
                key={el.id}
                image={el.image}
                name={el.name}
                description={el.description}
              />
            ))}
          </ul>
        </div>
      </section>
      <MainForm />
    </main>
  );
};

export default Equipment;
