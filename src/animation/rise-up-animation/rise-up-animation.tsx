"use client";
import { motion } from "motion/react";

import styles from "./rise-up.module.css";

import { ANIMATION_SETTINGS } from "./animation";
interface IRiseUpAnimation {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const RiseUpAnimation: React.FC<IRiseUpAnimation> = ({
  children,
  delay = ANIMATION_SETTINGS.transition.delay,
}) => {
  const animationOptions = {
    initial: { y: "20%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    ...ANIMATION_SETTINGS,
  };

  return (
    <span className={styles.animatedElement}>
      <motion.span
        className={styles.animatedElement}
        {...animationOptions}
        transition={{ ...ANIMATION_SETTINGS.transition, delay: delay }}>
        {children}
      </motion.span>
    </span>
  );
};

export default RiseUpAnimation;
