"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Button from "@/ui-kit/button/button";
import { useState } from "react";

const Pagination = ({ totalPages }: any) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams?.get("page") ?? "1";

  console.log(page);
  return (
    <div>
      <Button
        onClick={() => {
          router.push(`/cases?page=${Number(page) - 1}`);
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
  );
};

export default Pagination;
