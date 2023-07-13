import { Meta, StoryObj } from "@storybook/react";

import { AddButton } from './AddButton';


export default {
  title: "Button/AddButton",
  component: AddButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof AddButton>;

export const Default: StoryObj<typeof AddButton> = {};
