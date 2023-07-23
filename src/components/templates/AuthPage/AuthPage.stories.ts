import { Meta, StoryObj } from '@storybook/react';

import { AuthPage } from './AuthPage';

export default {
  title: 'AuthPage',
  component: AuthPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof AuthPage>;

export const Default: StoryObj<typeof AuthPage> = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
