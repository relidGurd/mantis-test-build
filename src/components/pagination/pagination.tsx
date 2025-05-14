"use client";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/ui-kit/button/button";

const Pagination = ({ totalPages }: any) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams?.get("page") ?? "1";

  console.log(page);
  return (
    <>
      {page < totalPages ? (
        <div>
          <Button
            onClick={() => {
              router.push(`/cases?page=${Number(page) + 1}`);
            }}
            label="Назад"
          />

          <Button
            onClick={() => {
              router.push(`/cases?page=${Number(page) + 1}`);
            }}
            label="Вперед"
          />
        </div>
      ) : (
        <Button
          onClick={() => {
            router.push(`/cases?page=${Number(page) - 1}`);
          }}
          label="Назад"
        />
      )}
    </>
  );
};

export default Pagination;
