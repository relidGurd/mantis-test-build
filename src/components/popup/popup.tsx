"use client";
import styles from "./popup.module.css";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { CloseIcon } from "@/icons/icons";
interface IPopup {
  button: React.ReactElement;
  children: React.ReactNode;
  isOpen?: boolean;
}

const Popup = ({ children, isOpen, button }: IPopup) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(isOpen ? isOpen : false);

  useEffect(() => {
    const handleOpen = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOpen);

    return () => document.removeEventListener("click", handleOpen);
  }, [open]);

  return (
    <div>
      <div onClick={() => setOpen(!open)}>{button}</div>
      {open
        ? createPortal(
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className={styles.popupContainer}
            >
              <div ref={ref}>
                <div className={styles.containerPop}>
                  <div
                    onClick={() => setOpen(!open)}
                    className={styles.CloseIconS}
                  >
                    <CloseIcon width={20} height={20} />
                  </div>
                  {children}
                </div>
              </div>
            </motion.div>,

            document.body
          )
        : null}
    </div>
  );
};

export default Popup;
