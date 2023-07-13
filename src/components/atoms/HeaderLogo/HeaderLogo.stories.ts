import { Meta, StoryObj } from '@storybook/react';

import { HeaderLogo } from './HeaderLogo';

export default {
  title: 'Logo/HeaderLogo',
  component: HeaderLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof HeaderLogo>;

export const Default: StoryObj<typeof HeaderLogo> = {};
