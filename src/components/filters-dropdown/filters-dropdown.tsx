"use client";
import styles from "./filters-dropdown.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import classNames from "classnames";

interface IDropdown {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const FiltersDropdown: React.FC<IDropdown> = ({
  button,
  children,
  isOpen,
  onToggle,
}) => {
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refElement.current &&
        !refElement.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          onToggle(); // закрываем, вызываем toggle из родителя
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div ref={refElement} className={styles.dropdownContainer}>
      <div onClick={onToggle}>{button}</div>

      <motion.div
        variants={motionDropdown}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={classNames(styles.dropdown_content, "main-container")}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FiltersDropdown;
