import { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from './DropdownMenu';

export type DropdownMenuProps = {};

export default {
  title: "DropdownMenu",
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof DropdownMenu>;

export const Default: StoryObj<typeof DropdownMenu> = {};
