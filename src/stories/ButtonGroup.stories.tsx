import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonGroup } from "../index";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const ButtonPlayground: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" variant="solid" size="small">
      <Button>one</Button>
      <Button>two</Button>
      <Button size="large">three</Button>
    </ButtonGroup>
  ),
};
