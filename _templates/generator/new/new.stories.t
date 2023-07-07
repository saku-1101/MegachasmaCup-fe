---
to: src/components/<%= name %>/<%= name %>.stories.ts
---
import { Meta, StoryObj } from "@storybook/react";

import { <%= name %> } from './<%= name %>';
export default {
  title: "<%= name %>",
  component: <%= name %>,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof <%= name %>>;

export const Default: StoryObj<typeof <%= name %>> = {};
