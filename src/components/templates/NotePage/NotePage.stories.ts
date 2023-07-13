import { Meta, StoryObj } from '@storybook/react';

import { NotePage } from './NotePage';

export type NotePageProps = {};

export default {
  title: 'NotePage',
  component: NotePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof NotePage>;

export const Default: StoryObj<typeof NotePage> = {
  args: {
    user: {
      id: '0',
      name: 'student',
      faculty: 'Informatics',
      year: 4,
      notes: {
        id: '0',
        description: 'descriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        content:
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      },
    },
    numOfLike: 24,
  },
};
