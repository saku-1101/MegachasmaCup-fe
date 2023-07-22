import { Meta, StoryObj } from '@storybook/react';

import { PrivateNotePage } from './PrivateNotePage';

export type PrivateNotePageProps = {};

export default {
  title: 'PrivateNotePage',
  component: PrivateNotePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof PrivateNotePage>;

export const Default: StoryObj<typeof PrivateNotePage> = {
  args: {
    user_id: '0',
    note_id: '0',
  },
};
