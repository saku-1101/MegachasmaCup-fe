import { Meta, StoryObj } from "@storybook/react";

import { WelcomePage } from './WelcomePage';


export default {
  title: "WelcomePage",
  component: WelcomePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof WelcomePage>;

export const Default: StoryObj<typeof WelcomePage> = {};
