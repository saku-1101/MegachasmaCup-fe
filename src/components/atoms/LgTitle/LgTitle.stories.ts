import { Meta, StoryObj } from '@storybook/react';

import { LgTitle } from './LgTitle';

export type LgTitleProps = {};

export default {
  title: 'Paragraph/LgTitle',
  component: LgTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof LgTitle>;

export const Default: StoryObj<typeof LgTitle> = {
  args: {
    title: 'This is a large title template.',
  },
};
