import { Meta, StoryObj } from "@storybook/react";

import { Test } from './Test';
export default {
  title: "Test",
  component: Test,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof Test>;

export const Default: StoryObj<typeof Test> = {};
