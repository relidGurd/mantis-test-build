"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./breadcrumbs.module.css";
import Link from "next/link";
import classNames from "classnames";
import { BreadcrumbsArrow } from "@/icons/icons";

interface IBreadcrumItems {
  url: string;
  title: string;
}
interface IBreadcrumbs {
  list: IBreadcrumItems[];
  className?: string;
}

const Breadcrumbs: React.FC<IBreadcrumbs> = ({ list, className }) => {
  return (
    <section
      className={classNames(className ? className : "", styles.for_breadcrumbs)}
    >
      <nav aria-label="breadcrumb">
        <ul
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className={styles.breadcrumbs_main_container}
        >
          {list.map((el, index: number) => (
            <li className={styles.breadcrumbs_item_container}>
              <Link key={index} href={el.url}>
                <Typography
                  className={styles.breadcrumbs_item_title}
                  variant="span"
                  outline="regular"
                  register="16"
                >
                  {el.title}
                </Typography>
              </Link>
              <BreadcrumbsArrow className={styles.breadcrumbs_arrow} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Breadcrumbs;
