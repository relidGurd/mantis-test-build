"use client";
import Button from "@/ui-kit/button/button";
import styles from "./tags.module.css";
import {
  useRouter,
  useSearchParams,
  usePathname,
  redirect,
} from "next/navigation";
import classNames from "classnames";

interface ITagItem {
  title: string;
  url?: string;
}

interface ITags {
  tags: ITagItem[];
}

const Tags: React.FC<ITags> = ({ tags }) => {
  const searchParams: any = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentQuery = searchParams.get("query");

  console.log(currentQuery);
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <ul className={styles.tags_container}>
      <li>
        <button
          className={classNames(
            styles.tag_button,
            currentQuery === null ? styles.tag_button_active : ""
          )}
          onClick={() => handleSearch("")}
        >
          Все
        </button>
      </li>
      {tags.map((el: ITagItem, index: number) => (
        <li key={index}>
          <button
            className={classNames(
              styles.tag_button,
              currentQuery === el.title ? styles.tag_button_active : ""
            )}
            onClick={() => handleSearch(el.title)}
          >
            {el.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
