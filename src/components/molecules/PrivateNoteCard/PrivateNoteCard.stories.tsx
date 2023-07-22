import { Meta, StoryObj } from '@storybook/react';

import { PrivateNoteCard } from './PrivateNoteCard';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

export type PrivateNoteCardProps = {};

export default {
  title: 'Card/PrivateNoteCard',
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
    note: {
      id: 'post_12345',
      title: '素晴らしい景色',
      description: '今日の素晴らしい景色をシェアします。',
      userId: 'user_6789',
      tags: [
        {
          id: 'tag_1',
          name: '自然',
        },
        {
          id: 'tag_2',
          name: '風景',
        },
      ],
      likeUser: [
        {
          id: 'user_9876',
        },
        {
          id: 'user_5432',
        },
      ],
    },
    user_id: '0',
  },
};
