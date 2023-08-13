import styled from "styled-components";

import { ButtonProps } from "./Button.types";
import { colorValues } from "../../constants/color-constants";

export const StyledButton = styled.button<ButtonProps>`
  font-weight: 500;
  border-radius: 4px;
  box-sizing: border-box;
  line-height: 1.75;
  min-width: 64px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: ${(props) => !props.disabled && "pointer"};
  border: ${(props) =>
    props.variant === "outline" && props.color
      ? props.disabled
        ? `1px solid ${colorValues["disabled"].border}`
        : `1px solid ${colorValues[props.color].border}`
      : "0"};
  background-color: ${(props) =>
    props.variant === "solid" && props.color
      ? props.disabled
        ? colorValues["disabled"].backgroundColor
        : colorValues[props.color].backgroundColor
      : "transparent"};
  color: ${(props) =>
    props.disabled
      ? colorValues["disabled"].color
      : props.variant !== "solid" && props.color
      ? `${colorValues[props.color].color}`
      : "#ffffff"};
  padding: ${(props) => {
    if (props.size === "small") {
      return "4px 10px";
    } else if (props.size === "medium") {
      return "6px 16px";
    } else if (props.size === "large") {
      return "8px 22px";
    }
  }};
  font-size: ${(props) => {
    if (props.size === "small") {
      return "0.8125rem";
    } else if (props.size === "medium") {
      return "0.875rem";
    } else if (props.size === "large") {
      return "0.9375rem";
    }
  }};
  box-shadow: ${(props) =>
    props.variant === "solid" &&
    !props.disabled &&
    !props.disableShadow &&
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"};

  ${(props) =>
    !props.disabled &&
    `&:hover {
      border: ${
        props.variant === "outline" && props.color
          ? `1px solid ${colorValues[props.color].hover.border}`
          : "0"
      };
      background-color: ${
        props.color
          ? props.variant === "solid"
            ? colorValues[props.color].hover.solidBackground
            : colorValues[props.color].hover.backgroundColor
          : ""
      };
    }`}
`;
