import { Meta, StoryObj } from '@storybook/react';

import { NoteEditPage } from './NoteEditPage';

export type NoteEditPageProps = {};

export default {
  title: 'NoteEditPage',
  component: NoteEditPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof NoteEditPage>;

export const Default: StoryObj<typeof NoteEditPage> = {
  args: {
    user: {
      user_id: '0',
      name: 'student',
    },
  },
};
