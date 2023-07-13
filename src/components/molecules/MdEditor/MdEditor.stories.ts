import { Meta, StoryObj } from '@storybook/react';

import { MdEditor } from './MdEditor';

export default {
  title: 'Note/MdEditor',
  component: MdEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof MdEditor>;

export const Default: StoryObj<typeof MdEditor> = {};
