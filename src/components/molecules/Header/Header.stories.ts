import { Meta, StoryObj } from "@storybook/react";

import { Header } from './Header';

export type HeaderProps = {};

export default {
  title: "Header",
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {};
