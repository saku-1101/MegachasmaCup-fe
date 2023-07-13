import { Meta, StoryObj } from '@storybook/react';

import { LikeButton } from './LikeButton';

export default {
  title: 'Button/LikeButton',
  component: LikeButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof LikeButton>;

export const Default: StoryObj<typeof LikeButton> = {
  args: {
    numOfLike: 0,
  },
};
