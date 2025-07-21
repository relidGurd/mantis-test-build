"use client";
import styles from "./filters-dropdown.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import classNames from "classnames";

interface IDropdown {
  button: React.ReactNode;
  children: React.ReactNode;
}

const FiltersDropdown: React.FC<IDropdown> = ({ button, children }) => {
  const [visible, setIsVisible] = useState(false);
  const refElement = useRef<HTMLDivElement>(null);

  const motionDropdown = {
    hidden: {
      opacity: 0,
      display: "none",
    },
    visible: {
      display: "block",
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  // Закрытие при клике вне Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refElement.current &&
        !refElement.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={refElement} className={styles.dropdownContainer}>
      <div onClick={() => setIsVisible(!visible)}>{button}</div>
      {true && (
        <motion.div
          variants={motionDropdown}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className={classNames(styles.dropdown_content, "main-container")}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default FiltersDropdown;
