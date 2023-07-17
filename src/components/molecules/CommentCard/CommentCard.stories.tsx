import { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

export type CommentCardProps = {};

export default {
  title: 'CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof CommentCard>;

export const Default: StoryObj<typeof CommentCard> = {
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
    comment_id: '0',
    user: { id: '0', name: 'student' },
    numOfLike: 20,
    comment: 'commentcommentcommentcommentcommentcommentcommentcomment',
  },
};
