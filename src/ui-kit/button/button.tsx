"use client";
import classNames from "classnames";
import styles from "./button.module.css";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: "blackButton" | "greenButton" | "buttonRound";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "blackButton",
  size = "medium",
  type = "button",
  isLoading = false,
  className = "",
}) => {
  const buttonClass = classNames(
    styles.basic,
    styles[color],
    styles[size],
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      disabled={isLoading}
    >
      {isLoading ? <span>Loading...</span> : label}
    </button>
  );
};

export default Button;
