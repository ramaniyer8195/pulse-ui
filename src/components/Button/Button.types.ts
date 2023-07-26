import { MouseEventHandler } from "react";

export interface ButtonProps {
  variant?: "solid" | "outline" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  disabled?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
