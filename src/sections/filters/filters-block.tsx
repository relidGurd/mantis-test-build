"use client";
import Button from "@/ui-kit/button/button";
import styles from "./filters.module.css";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import FiltersDropdown from "@/components/filters-dropdown/filters-dropdown";
import { FiltersIcon, SortingIcon } from "@/icons/icons";
import FormInput from "./form-inputs/form-slider";

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

  function handleClear() {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    params.delete("price");
    params.delete("sort"); // если нужно
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
            {({ resetForm }) => (
              <Form>
                <FormInput />
                {filter_list.map((el: any) => (
                  <div className={styles.input_section} key={el.id}>
                    <strong className={styles.input_label}>{el.title}</strong>
                    <div className={styles.checkbox_container}>
                      {el.list.map((item: any, index: number) => (
                        <label className={styles.checkbox_item} key={index}>
                          <Field
                            className={styles.checkbox_box}
                            type="checkbox"
                            name="selected"
                            value={item}
                          />
                          <span>{item}</span>
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
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    handleClear();
                  }}
                  className={styles.clear_query__params}
                >
                  Очитсить фильры
                </button>
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
              onSubmit={(values) => {
                handleSearch(
                  JSON.stringify(values.selected),
                  JSON.stringify(values.price)
                );
                setIsOpen(false);
              }}
            >
              {({ resetForm }) => (
                <Form>
                  <FormInput />
                  {filter_list.map((el: any) => (
                    <div className={styles.input_section} key={el.id}>
                      <strong className={styles.input_label}>{el.title}</strong>
                      <div className={styles.checkbox_container}>
                        {el.list.map((item: any, index: number) => (
                          <label className={styles.checkbox_item} key={index}>
                            <Field
                              className={styles.checkbox_box}
                              type="checkbox"
                              name="selected"
                              value={item}
                            />
                            <span>{item}</span>
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
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      handleClear();
                      setIsOpen(false);
                    }}
                    className={styles.clear_query__params}
                  >
                    Очитсить фильры
                  </button>
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
