import { Meta, StoryObj } from '@storybook/react';

import { ClassCard } from './ClassCard';

export type ClassCardProps = {};

export default {
  title: 'ClassCard',
  component: ClassCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof ClassCard>;

export const Default: StoryObj<typeof ClassCard> = {
  args: {
    title: '線形代数Ⅱ',
    numOfStudent: 20,
    numOfNote: 30,
  },
};
