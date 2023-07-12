import { Meta, StoryObj } from '@storybook/react';

import { Note } from './Note';

export type NoteProps = {};

export default {
  title: 'Note/Note',
  component: Note,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof Note>;

export const Default: StoryObj<typeof Note> = {
  args: {
    title: 'Student',
  },
};
