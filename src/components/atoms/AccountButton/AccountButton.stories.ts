import { Meta, StoryObj } from '@storybook/react';

import { AccountButton } from './AccountButton';

export default {
  title: 'Button/AccountButton',
  component: AccountButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof AccountButton>;

export const Default: StoryObj<typeof AccountButton> = {};
