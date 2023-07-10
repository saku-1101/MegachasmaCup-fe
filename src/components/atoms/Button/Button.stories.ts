import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export type ButtonProps = {};

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    label: 'Button',
    isSecondaryBg: true,
    handleAction: () => {
      return;
    },
  },
};
