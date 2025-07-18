"use client";

import styles from "./main-tab.module.css";
import { useState } from "react";
import Typography from "@/ui-kit/typography/typography";
import { motion } from "motion/react";
import classNames from "classnames";
import Tab from "../tab/tab";
import { tabData } from "./tab-data";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const TabComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeItem = tabData[activeIndex];

  const motionTab = {
    init: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: [0.215, 0.61, 0.355, 1],
    },
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.desctop_tab}>
        <div className={styles.tab_informationContainer}>
          <motion.div
            key={activeItem.id}
            className={styles.information}
            variants={motionTab}
            initial="init"
            animate="visible"
            transition={{ ...motionTab.transition }}
          >
            <Typography variant="span" register="48" outline="bold">
              {`0${activeItem.id}`}
            </Typography>
            <div className={styles.tab_info__container}>
              <ReactMarkdown
                children={activeItem.description}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]} // позволяет обрабатывать HTML внутри Markdown
              />
            </div>
          </motion.div>
        </div>

        <div className={styles.buttons_container}>
          {tabData.map((el: any, index: number) => (
            <button
              className={classNames(
                styles.btn_tab,
                index === activeIndex ? styles.active_btn : ""
              )}
              onClick={() => setActiveIndex(index)}
              key={el.id}
            >
              {el.title}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.mobile_tab}>
        <Tab data={tabData} />
      </div>
    </div>
  );
};

export default TabComponent;
