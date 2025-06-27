"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./text-block.module.css";
import classNames from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface ITextBlock {
  title: string;
  description: string;
  image: any;
  align: string;
}

const TextBlock: React.FC<ITextBlock> = ({
  align,
  title,
  description,
  image,
}) => {
  const currentClass = styles[`block-${align}`];

  return (
    <section className="main-container">
      <div className={classNames(currentClass)}>
        <div className={styles.text_section}>
          <Typography
            className={styles.block_title}
            register="32"
            outline="semibold"
            variant="h2"
          >
            {title}
          </Typography>

          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        <div className={styles.text_block_imgContainer}>
          <Image
            className={styles.text_block_image}
            src={
              image.url
                ? `https://cms.mantis-185.ru${image.url}`
                : "/demo-shoes.png"
            }
            width={950}
            height={950}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
