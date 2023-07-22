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
    author: {
      getUser: [
        {
          id: 'user_111',
          imageUrl: 'https://example.com/user_111.jpg',
          name: 'Alice Johnson',
          email: 'alice.johnson@example.com',
          userSchool: [
            {
              id: 'school_11',
              name: 'XYZ University',
            },
          ],
        },
      ],
    },
    note: {
      getNotes: [
        {
          id: 'note_001',
          title: '旅行の計画',
          description: '来月の旅行の計画を立てる',
          userId: 'user_001',
          tags: [
            {
              id: 'tag_001',
              name: '旅行',
            },
            {
              id: 'tag_002',
              name: '予定',
            },
          ],
          likeUser: [
            {
              id: 'user_101',
            },
            {
              id: 'user_102',
            },
          ],
          comments: [
            {
              id: 'comment_001',
              comment: '楽しそうですね！',
              userId: 'user_201',
            },
            {
              id: 'comment_002',
              comment: 'どこに行く予定ですか？',
              userId: 'user_202',
            },
          ],
        },
        {
          id: 'note_002',
          title: 'おすすめのレストラン',
          description: '美味しい料理が食べられるおすすめのレストランを紹介します。',
          userId: 'user_002',
          tags: [
            {
              id: 'tag_003',
              name: '食べ物',
            },
            {
              id: 'tag_004',
              name: 'レストラン',
            },
          ],
          likeUser: [
            {
              id: 'user_103',
            },
            {
              id: 'user_104',
            },
          ],
          comments: [
            {
              id: 'comment_003',
              comment: 'どんな料理がおすすめですか？',
              userId: 'user_203',
            },
            {
              id: 'comment_004',
              comment: '行ってみたいです！',
              userId: 'user_204',
            },
            {
              id: 'comment_005',
              comment: '営業時間は何時からですか？',
              userId: 'user_205',
            },
          ],
        },
      ],
    },
    numOfLike: 24,
    didYouLiked: true,
  },
};
