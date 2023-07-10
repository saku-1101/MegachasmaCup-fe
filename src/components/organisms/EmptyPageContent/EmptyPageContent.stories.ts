import { Meta, StoryObj } from "@storybook/react";

import { EmptyPageContent } from './EmptyPageContent';


export default {
  title: "EmptyPageContent",
  component: EmptyPageContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof EmptyPageContent>;

export const Default: StoryObj<typeof EmptyPageContent> = {};
