import React, { PropsWithChildren } from "react";

import { ButtonProps } from "./Button.types";
import { StyledButton } from "./styled-components";

// TODO: Handle icon button and start and end icons
const Button: React.FC = ({
  variant = "solid",
  size = "medium",
  color = "primary",
  disabled = false,
  disableShadow = false,
  onClick = () => {},
  ext = {},
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      disableShadow={disableShadow}
      style={ext}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
