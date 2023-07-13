import { Meta, StoryObj } from '@storybook/react';

import { Note } from './Note';

export type NoteProps = {};

export default {
  title: 'Note',
  component: Note,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof Note>;

export const Default: StoryObj<typeof Note> = {
  args: {
    user: {
      id: '0',
      name: 'student',
      faculty: 'Informatics',
      year: 4,
      note_id: '0',
      note: {
        id: '0',
        description: 'descriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        content:
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
        like: 24,
      },
    },
  },
};
