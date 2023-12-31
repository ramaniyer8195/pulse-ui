import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPlayground: Story = {
  args: {
    variant: "solid",
    size: "medium",
    color: "primary",
    disabled: false,
    disableShadow: false,
    onClick: () => {},
  },
};
