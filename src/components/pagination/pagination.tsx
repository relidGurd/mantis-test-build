"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/ui-kit/button/button";
import styles from "./pagination.module.css";
const Pagination = ({ totalPages, variant }: any) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams?.get("page") ?? "1";

  if (totalPages === 1) {
    return <></>;
  }

  if (Number(page) === 1) {
    return (
      <div className={styles.pagination_container}>
        <Button
          className={styles.pagination_btn}
          onClick={() => {
            router.push(`/${variant}?page=${Number(page) + 1}`);
          }}
          label="Далее"
        />
      </div>
    );
  }

  return (
    <div className={styles.pagination_container}>
      <Button
        className={styles.pagination_btn}
        onClick={() => {
          router.push(`/${variant}?page=${Number(page) - 1}`);
        }}
        label="Назад"
      />

      <Button
        className={styles.pagination_btn}
        onClick={() => {
          router.push(`/${variant}?page=${Number(page) + 1}`);
        }}
        label="Далее"
      />
    </div>
  );
};

export default Pagination;
