import { Meta, StoryObj } from '@storybook/react';

import { TagField } from './TagField';

export default {
  title: 'Tag/TagField',
  component: TagField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof TagField>;

export const Default: StoryObj<typeof TagField> = {};
