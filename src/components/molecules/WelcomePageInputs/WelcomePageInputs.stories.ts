import { Meta, StoryObj } from '@storybook/react';

import { WelcomePageInputs } from './WelcomePageInputs';

export type WelcomePageInputsProps = {};

export default {
  title: 'Field/WelcomePageInputs',
  component: WelcomePageInputs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof WelcomePageInputs>;

export const Default: StoryObj<typeof WelcomePageInputs> = {};
