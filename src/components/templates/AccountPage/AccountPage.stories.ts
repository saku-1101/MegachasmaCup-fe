import { Meta, StoryObj } from "@storybook/react";

import { AccountPage } from './AccountPage';


export default {
  title: "AccountPage",
  component: AccountPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof AccountPage>;

export const Default: StoryObj<typeof AccountPage> = {};
