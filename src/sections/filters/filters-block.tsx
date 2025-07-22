"use client";
import Button from "@/ui-kit/button/button";
import styles from "./filters.module.css";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import FiltersDropdown from "@/components/filters-dropdown/filters-dropdown";
import { FiltersIcon, SortingIcon } from "@/icons/icons";

const FIlters: React.FC<any> = ({ filter_list }) => {
  const searchParams: any = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [open, setIsOpen] = useState(false);

  function handleSearch(term: string, price: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      params.set("price", price);
    } else {
      params.delete("query");
      params.delete("price");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleSort(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <div className={styles.desktop_filters}>
        <div className={styles.filters_container}>
          <Formik
            initialValues={{ selected: [], price: 0 }}
            onSubmit={(values) =>
              handleSearch(
                JSON.stringify(values.selected),
                JSON.stringify(values.price)
              )
            }
          >
            {() => (
              <Form>
                <div>
                  <strong>Стоимость</strong>
                  <div>
                    <label>
                      <Field
                        name="price"
                        type="range"
                        min={0}
                        step=""
                        max={10}
                      />
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
      </div>

      <div className={styles.mobile_filters}>
        <FiltersDropdown
          isOpen={open}
          onToggle={() => setIsOpen(!open)}
          button={
            <div>
              <FiltersIcon isOpen={open} />
            </div>
          }
        >
          <div className={styles.filters_container}>
            <Formik
              initialValues={{ selected: [], price: 0 }}
              onSubmit={(values) =>
                handleSearch(
                  JSON.stringify(values.selected),
                  JSON.stringify(values.price)
                )
              }
            >
              {() => (
                <Form>
                  <div>
                    <strong>Стоимость</strong>
                    <div>
                      <label>
                        <Field
                          name="price"
                          type="range"
                          min={0}
                          step=""
                          max={10}
                        />
                      </label>
                    </div>
                  </div>
                  {filter_list.map((el: any) => (
                    <div key={el.id}>
                      <strong>{el.title}</strong>
                      <div>
                        {el.list.map((item: any, index: number) => (
                          <label key={index}>
                            <Field
                              type="checkbox"
                              name="selected"
                              value={item}
                            />
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
                    onClick={() => setIsOpen(false)}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </FiltersDropdown>
        <div onClick={() => handleSort("asc")}>
          <SortingIcon />
        </div>
      </div>
    </div>
  );
};

export default FIlters;
