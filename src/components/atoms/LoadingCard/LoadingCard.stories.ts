import { Meta, StoryObj } from "@storybook/react";

import { LoadingCard } from './LoadingCard';

export type LoadingCardProps = {};

export default {
  title: "LoadingCard",
  component: LoadingCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof LoadingCard>;

export const Default: StoryObj<typeof LoadingCard> = {};
