import { Meta, StoryObj } from "@storybook/react";

import { ClassPage } from './ClassPage';


export default {
  title: "ClassPage",
  component: ClassPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof ClassPage>;

export const Default: StoryObj<typeof ClassPage> = {};
