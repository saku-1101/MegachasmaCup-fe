import { Meta, StoryObj } from '@storybook/react';

import { Note } from './Note';
import { WrapperContainer, CoreContainer } from '@/components/styles/containers';

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
  decorators: [
    (Story) => (
      <WrapperContainer>
        <CoreContainer>
          <Story />
        </CoreContainer>
      </WrapperContainer>
    ),
  ],
  args: {
    title: 'Student',
  },
};
