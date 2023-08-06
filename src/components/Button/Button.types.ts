import { MouseEventHandler, CSSProperties } from "react";

export interface ButtonProps {
  variant?: "solid" | "outline" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  disabled?: boolean;
  disableShadow?: boolean;
  ext?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
