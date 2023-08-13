import { MouseEventHandler, CSSProperties, ReactNode } from "react";

export interface ButtonGroupProps {
  variant?: "solid" | "outline" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  disableShadow?: boolean;
  ext?: CSSProperties;
  children?: ReactNode;
}
