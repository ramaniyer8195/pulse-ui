import styled from "styled-components";

import { ButtonGroupProps } from "./ButtonGroup.types";
import { colorValues } from "../../constants/color-constants";

export const StyledButtonGroup = styled.div<ButtonGroupProps>`
  display: inline-flex;
  border-radius: 4px;
  flex-direction: ${(props) =>
    props.orientation === "horizontal" ? "row" : "column"};
  box-shadow: ${(props) =>
    props.variant === "solid" &&
    !props.disabled &&
    !props.disableShadow &&
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"};

  // CSS for buttons inside the button group
  button {
    min-width: 40px;
    ${(props) =>
      props.variant === "solid" &&
      !props.disabled &&
      !props.disableShadow &&
      "box-shadow: none"};
  }
  button:not(:last-of-type) {
    ${(props) => {
      if (props.orientation === "horizontal") {
        return `
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        `;
      } else {
        return `
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        `;
      }
    }}
    ${(props) => {
      if (props.orientation === "horizontal") {
        if (props.variant === "outline") {
          return "border-right-color: transparent";
        } else if (props.color && props.variant === "solid") {
          return `
            border-right: 1px solid ${colorValues["disabled"].border};
            border-color: ${colorValues[props.color].hover.solidBackground};
          `;
        } else if (props.color && props.variant === "text") {
          return `
            border-right: 1px solid ${colorValues["disabled"].border};
            border-color: ${colorValues[props.color].border};
          `;
        } else if (props.disabled) {
          return `border-right: 1px solid ${colorValues["disabled"].border};`;
        }
      } else {
        if (props.variant === "outline") {
          return "border-bottom-color: transparent";
        } else if (props.color && props.variant === "solid") {
          return `
            border-bottom: 1px solid ${colorValues["disabled"].border};
            border-color: ${colorValues[props.color].hover.solidBackground};
          `;
        } else if (props.color && props.variant === "text") {
          return `
            border-bottom: 1px solid ${colorValues["disabled"].border};
            border-color: ${colorValues[props.color].border};
          `;
        } else if (props.disabled) {
          return `border-bottom: 1px solid ${colorValues["disabled"].border};`;
        }
      }
    }}
  }
  ${(props) => {
    if (props.orientation === "horizontal") {
      return (
        props.color &&
        !props.disabled &&
        props.variant === "outline" &&
        `button:not(:last-of-type):hover {
          border-right-color: ${colorValues[props.color].hover.border};
        }`
      );
    } else {
      return (
        props.color &&
        !props.disabled &&
        props.variant === "outline" &&
        `button:not(:last-of-type):hover {
          border-bottom-color: ${colorValues[props.color].hover.border};
        }`
      );
    }
  }}
  button:not(:first-of-type) {
    ${(props) => {
      if (props.orientation === "horizontal") {
        return `
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
        `;
      } else {
        return `
          border-top-right-radius: 0px;
          border-top-left-radius: 0px;
        `;
      }
    }}
  }
`;
