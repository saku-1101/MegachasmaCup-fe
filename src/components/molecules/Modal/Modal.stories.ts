import { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

export type ModalProps = {};

export default {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
  args: {
    modalOpen: true,
    title: 'This is a Modal!',
    subtitle: 'THis is a sentence.',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
