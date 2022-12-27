import React, { FC } from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  //size?: "small" | "large";
  variant?: "primary"|"default"|"dashed"|"text"|"link";
}

const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  //size = "small",
  variant="default"
}) => {
  return (
    <button
      className={`button button--${variant}`}
      disabled={disabled}
      onClick={onClick}
      
    >
      {children}
    </button>
  );
};

export default Button;
