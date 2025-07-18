"use client";
import { useState } from "react";
import styles from "./tab.module.css";
import classNames from "classnames";
import { Arrow } from "@/icons/icons";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Tab: React.FC<any> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  const motionTab = {
    init: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  return (
    <>
      {data.map((el: any, index: number) => (
        <div key={index} className={styles.tab_container}>
          <button
            className={styles.tab_btn}
            onClick={() => setActiveTab(el.id)}
          >
            <span className={styles.tab_title}>{el.title}</span>

            <span
              className={classNames(
                styles.tab_arrow,
                activeTab === el.id ? styles.tab_arrow_active : ""
              )}
            >
              <Arrow />
            </span>
          </button>
          {activeTab === el.id && (
            <motion.div
              variants={motionTab}
              initial="init"
              animate={activeTab === el.id ? "visible" : "init"}
              className={styles.tab_text}
            >
              <div className={styles.tab_info__container}>
                <ReactMarkdown
                  children={el.description}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]} // позволяет обрабатывать HTML внутри Markdown
                />
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </>
  );
};

export default Tab;
