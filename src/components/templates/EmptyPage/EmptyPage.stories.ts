import { Meta, StoryObj } from "@storybook/react";

import { EmptyPage } from './EmptyPage';


export default {
  title: "EmptyPage",
  component: EmptyPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof EmptyPage>;

export const Default: StoryObj<typeof EmptyPage> = {};
