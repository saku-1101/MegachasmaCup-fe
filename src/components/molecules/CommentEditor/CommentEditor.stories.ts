import { Meta, StoryObj } from "@storybook/react";

import { CommentEditor } from './CommentEditor';

export type CommentEditorProps = {};

export default {
  title: "CommentEditor",
  component: CommentEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof CommentEditor>;

export const Default: StoryObj<typeof CommentEditor> = {};
