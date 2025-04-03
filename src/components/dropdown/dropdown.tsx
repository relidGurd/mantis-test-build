"use client";
import styles from "./dropdown.module.css";
import { useRef, useState } from "react";
import { motion } from "motion/react";
interface IDropdown {
  button: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const Dropdown: React.FC<IDropdown> = ({ button, children }) => {
  const [visible, setIsVisible] = useState(false);
  const refElement = useRef<HTMLDivElement>(null);

  const motionDropdown = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <div
      onClick={() => setIsVisible(true)}
      className={styles.dropdownContainer}>
      <div ref={refElement}>{button}</div>
      {visible && (
        <motion.div
          variants={motionDropdown}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className={styles.dropdown_content}>
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
