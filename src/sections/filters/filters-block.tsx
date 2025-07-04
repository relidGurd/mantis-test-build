"use client";
import Button from "@/ui-kit/button/button";
import styles from "./filters.module.css";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const FIlters: React.FC<any> = ({ filter_list }) => {
  const searchParams: any = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
    <div className={styles.filters_container}>
      <Formik
        initialValues={{ selected: [] }}
        onSubmit={(values) => handleSearch(JSON.stringify(values.selected))}
      >
        {() => (
          <Form>
            <div>
              <strong>Стоимость</strong>
              <div>
                <label>
                  <Field type="range" min={0} max={10} />

                  <br />
                </label>
              </div>
            </div>
            {filter_list.map((el: any) => (
              <div key={el.id}>
                <strong>{el.title}</strong>
                <div>
                  {el.list.map((item: any, index: number) => (
                    <label key={index}>
                      <Field type="checkbox" name="selected" value={item} />
                      {item}
                      <br />
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <Button
              type="submit"
              className={styles.filters_btn}
              color="greenButton"
              label="Применить"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FIlters;
