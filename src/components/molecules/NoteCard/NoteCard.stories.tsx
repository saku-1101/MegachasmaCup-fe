import { Meta, StoryObj } from '@storybook/react';

import { NoteCard } from './NoteCard';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

export type NoteCardProps = {};

export default {
  title: 'Card/NoteCard',
  component: NoteCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof NoteCard>;

export const Default: StoryObj<typeof NoteCard> = {
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
