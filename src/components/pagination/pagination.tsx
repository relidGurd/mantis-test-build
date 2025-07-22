"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/ui-kit/button/button";
import styles from "./pagination.module.css";

const Pagination = ({ totalPages, variant }: any) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams?.get("page") ?? "1");

  if (totalPages === 1) {
    return null;
  }

  const createPageUrl = (page: number) => {
    // Создаём новый объект URLSearchParams на основе текущих параметров
    const params = new URLSearchParams(searchParams?.toString());
    // Обновляем параметр page
    params.set("page", page.toString());

    return `/${variant}?${params.toString()}`;
  };

  return (
    <div className={styles.pagination_container}>
      {currentPage > 1 && (
        <Button
          className={styles.pagination_btn}
          onClick={() => {
            router.push(createPageUrl(currentPage - 1));
          }}
          label="Назад"
        />
      )}

      {currentPage < totalPages && (
        <Button
          className={styles.pagination_btn}
          onClick={() => {
            router.push(createPageUrl(currentPage + 1));
          }}
          label="Далее"
        />
      )}
    </div>
  );
};

export default Pagination;
