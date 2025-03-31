"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import styles from "./rise-up.module.css";
import { delay } from "motion";
interface IRiseUpAnimation {
  children: React.ReactNode;
}

const RiseUpAnimation: React.FC<IRiseUpAnimation> = ({ children }) => {
  const refElement = useRef<HTMLDivElement>(null);
  const isInView = useInView(refElement, { once: true, amount: 0.5 });

  const animationVariant = {
    elementHidden: {
      opacity: 0,
      y: 100,
    },
    elementVisible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <span className={styles.animatedElement} ref={refElement}>
      <motion.span
        className={styles.animatedElement}
        variants={animationVariant}
        initial="elementHidden"
        animate={isInView ? "elementVisible" : "elementHidden"}>
        {children}
      </motion.span>
    </span>
  );
};

export default RiseUpAnimation;
