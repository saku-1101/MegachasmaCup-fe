import { Meta, StoryObj } from "@storybook/react";

import { LogoutModal } from './LogoutModal';

export type LogoutModalProps = {};

export default {
  title: "LogoutModal",
  component: LogoutModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof LogoutModal>;

export const Default: StoryObj<typeof LogoutModal> = {};
