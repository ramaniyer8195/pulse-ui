import React from "react";

import { ButtonProps } from "./Button.types";
import { StyledButton } from "./styled-components";

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "medium",
  color = "primary",
  disabled = false,
  label = "",
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
