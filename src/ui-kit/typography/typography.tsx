import classNames from "classnames";
import styles from "./typography.module.css";

type TypographyProps = {
  variant?: "h1" | "h2" | "p" | "span";
  outline?: "regular" | "bold" | "semibold";
  register?: "12" | "14" | "16" | "18" | "20" | "24" | "32" | "40" | "48";
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  className,
  children,
  register,
  outline,
}) => {
  const Tag = variant;

  const typographyClass = styles[`text-${register}-${outline}`];
  return (
    <Tag className={classNames(typographyClass, className)}>{children}</Tag>
  );
};

export default Typography;
