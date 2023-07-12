import { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

export type TagProps = {};

export default {
  title: 'Tag/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof Tag>;

export const Default: StoryObj<typeof Tag> = {
  args: {
    text: 'Tag',
  },
};
