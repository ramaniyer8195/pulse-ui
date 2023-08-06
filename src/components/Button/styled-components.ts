import styled from "styled-components";

import { ButtonProps } from "./Button.types";
import { blue, green, lightBlue, orange, purple, red } from "../Color";

const colorValues = {
  primary: {
    border: `${blue[700]}80`,
    backgroundColor: `${blue[700]}`,
    color: `${blue[700]}`,
    hover: {
      border: blue[700],
      backgroundColor: `${blue[700]}0a`,
      solidBackground: blue[800],
    },
  },
  secondary: {
    border: `${purple[500]}80`,
    backgroundColor: `${purple[500]}`,
    color: `${purple[500]}`,
    hover: {
      border: purple[500],
      backgroundColor: `${purple[500]}0a`,
      solidBackground: purple[700],
    },
  },
  error: {
    border: `${red[700]}80`,
    backgroundColor: `${red[700]}`,
    color: `${red[700]}`,
    hover: {
      border: red[700],
      backgroundColor: `${red[700]}0a`,
      solidBackground: red[800],
    },
  },
  warning: {
    border: `${orange[700]}80`,
    backgroundColor: `${orange[700]}`,
    color: `${orange[700]}`,
    hover: {
      border: orange[700],
      backgroundColor: `${orange[700]}0a`,
      solidBackground: orange[900],
    },
  },
  info: {
    border: `${lightBlue[700]}80`,
    backgroundColor: `${lightBlue[700]}`,
    color: `${lightBlue[700]}`,
    hover: {
      border: lightBlue[700],
      backgroundColor: `${lightBlue[700]}0a`,
      solidBackground: lightBlue[900],
    },
  },
  success: {
    border: `${green[800]}80`,
    backgroundColor: `${green[800]}`,
    color: `${green[800]}`,
    hover: {
      border: green[800],
      backgroundColor: `${green[800]}0a`,
      solidBackground: green[900],
    },
  },
  disabled: {
    border: "#0000001f",
    backgroundColor: "#0000001f",
    color: "#00000042",
  },
};

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
