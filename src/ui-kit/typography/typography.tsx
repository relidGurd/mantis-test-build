import classNames from "classnames";
import styles from "./typography.module.css";

type TypographyProps = {
  variant?: "h1" | "h2" | "p" | "span";
  basicStyle: "" | "" | "";
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  className,
  children,
  basicStyle,
}) => {
  const Tag = variant;
  return <Tag className={classNames(className, [basicStyle])}>{children}</Tag>;
};

export default Typography;
