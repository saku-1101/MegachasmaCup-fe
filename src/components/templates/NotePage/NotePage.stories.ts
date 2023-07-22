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
    user_id: '0',
    class_id: '0',
    note_id: '0',
  },
};
