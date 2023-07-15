import { Meta, StoryObj } from "@storybook/react";

import { CommentAdder } from './CommentAdder';

export type CommentAdderProps = {};

export default {
  title: "CommentAdder",
  component: CommentAdder,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof CommentAdder>;

export const Default: StoryObj<typeof CommentAdder> = {};
