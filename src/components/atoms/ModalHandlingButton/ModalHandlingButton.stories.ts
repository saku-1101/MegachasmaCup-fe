import { Meta, StoryObj } from '@storybook/react';

import { ModalHandlingButton } from './ModalHandlingButton';

export type ModalHandlingButtonProps = {};

export default {
  title: 'ModalHandlingButton',
  component: ModalHandlingButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof ModalHandlingButton>;

export const Default: StoryObj<typeof ModalHandlingButton> = {
  args: {
    label: 'Open up a Modal!',
    isSecondaryBg: false,
  },
};
