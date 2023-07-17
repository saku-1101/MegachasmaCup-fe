import { Meta, StoryObj } from "@storybook/react";

import { SearchField } from './SearchField';

export type SearchFieldProps = {};

export default {
  title: "SearchField",
  component: SearchField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof SearchField>;

export const Default: StoryObj<typeof SearchField> = {};
