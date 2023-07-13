import { Meta, StoryObj } from "@storybook/react";

import { TextareaField } from './TextareaField';


export default {
  title: "TextareaField",
  component: TextareaField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof TextareaField>;

export const Default: StoryObj<typeof TextareaField> = {};
