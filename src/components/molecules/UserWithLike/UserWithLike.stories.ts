import { Meta, StoryObj } from '@storybook/react';

import { UserWithLike } from './UserWithLike';

export type UserWithLikeProps = {};

export default {
  title: 'UserWithLike',
  component: UserWithLike,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof UserWithLike>;

export const Default: StoryObj<typeof UserWithLike> = {};
