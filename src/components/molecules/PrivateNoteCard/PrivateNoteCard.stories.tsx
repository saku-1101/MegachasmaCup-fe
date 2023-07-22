import { Meta, StoryObj } from '@storybook/react';

import { PrivateNoteCard } from './PrivateNoteCard';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

export type PrivateNoteCardProps = {};

export default {
  title: 'Card/NoteCard',
  component: PrivateNoteCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof PrivateNoteCard>;

export const Default: StoryObj<typeof PrivateNoteCard> = {
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
    nameOfStudent: 'Student',
    description: 'description description description description description',
    tags: ['math', 'math', 'math', 'math', 'math'],
    numOfLike: 24,
  },
};
