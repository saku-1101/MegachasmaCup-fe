import { Meta, StoryObj } from "@storybook/react";

import { WelcomeAnimation } from './WelcomeAnimation';


export default {
  title: "WelcomeAnimation",
  component: WelcomeAnimation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof WelcomeAnimation>;

export const Default: StoryObj<typeof WelcomeAnimation> = {};
