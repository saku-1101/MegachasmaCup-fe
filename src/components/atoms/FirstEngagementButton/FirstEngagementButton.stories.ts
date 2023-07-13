import { Meta, StoryObj } from '@storybook/react';

import { FirstEngagementButton } from './FirstEngagementButton';

export default {
  title: 'Button/FirstEngagementButton',
  component: FirstEngagementButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof FirstEngagementButton>;

export const Default: StoryObj<typeof FirstEngagementButton> = {
  args: {
    label: '登録して利用を開始',
  },
};
