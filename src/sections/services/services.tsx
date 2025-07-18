"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./services.module.css";
import TabComponent from "@/components/tab-component/main-tab";

const Services = () => {
  return (
    <section className="main-container">
      <div className={styles.servicesContainer}>
        <Typography variant="h2" register="32" outline="bold">
          Наши услуги
        </Typography>
        <TabComponent />
      </div>
    </section>
  );
};

export default Services;
