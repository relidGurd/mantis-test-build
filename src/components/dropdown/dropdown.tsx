"use client";
import styles from "./dropdown.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface IDropdown {
  button: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<IDropdown> = ({ button, children }) => {
  const [visible, setIsVisible] = useState(false);
  const refElement = useRef<HTMLDivElement>(null);

  const motionDropdown = {
    hidden: {
      opacity: 0,

      display: "none",
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    visible: {
      display: "block",
      opacity: 1,

      transition: {
        ease: "easeInOut",
        duration: 0.4,
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
    <div
      ref={refElement}
      className={styles.dropdownContainer}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div onMouseEnter={() => setIsVisible(!visible)}>{button}</div>
      {true && (
        <motion.div
          variants={motionDropdown}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className={styles.dropdown_content}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
