import React, { Children, cloneElement, isValidElement } from "react";

import { ButtonGroupProps } from "./ButtonGroup.types";
import { StyledButtonGroup } from "./styled-components";
import Button from "../Button/Button";

// TODO: Handle icon button and start and end icons
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant = "solid",
  size = "medium",
  color = "primary",
  disabled = false,
  disableShadow = false,
  orientation = "horizontal",
  ext = {},
  ...props
}) => {
  return (
    <StyledButtonGroup
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      disableShadow={disableShadow}
      orientation={orientation}
      style={ext}
    >
      {Children.map(props.children, (child) => {
        if (isValidElement(child) && child.type === Button) {
          const {
            variant: childVariant,
            size: childSize,
            color: childColor,
            disabled: childDisabled,
            disableShadow: childDisableShadow,
            ext: childExt,
          } = child.props;
          const newChildProps = {
            variant: childVariant ? childVariant : variant,
            size: childSize ? childSize : size,
            color: childColor ? childColor : color,
            disabled: childDisabled ? childDisabled : disabled,
            disableShadow: childDisableShadow
              ? childDisableShadow
              : disableShadow,
            ext: childExt ? childExt : ext,
          };
          return cloneElement(child, { ...child.props, ...newChildProps });
        }

        return child;
      })}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
