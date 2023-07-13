import { Meta, StoryObj } from '@storybook/react';

import { MdTitle } from './MdTitle';

export type MdTitleProps = {};

export default {
  title: 'Paragraph/MdTitle',
  component: MdTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof MdTitle>;

export const Default: StoryObj<typeof MdTitle> = {
  args: {
    title: 'This is a middle size title template',
  },
};
