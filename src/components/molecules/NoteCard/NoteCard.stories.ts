import { Meta, StoryObj } from '@storybook/react';

import { NoteCard } from './NoteCard';

export type NoteCardProps = {};

export default {
  title: 'NoteCard',
  component: NoteCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof NoteCard>;

export const Default: StoryObj<typeof NoteCard> = {
  args: {
    nameOfStudent: 'Student',
    description: 'description description description description description',
    tags: ['math', 'math', 'math', 'math', 'math'],
    numOfLike: 24,
  },
};
