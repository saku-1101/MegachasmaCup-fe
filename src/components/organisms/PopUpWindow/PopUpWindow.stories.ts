import { Meta, StoryObj } from '@storybook/react';

import { PopUpWindow } from './PopUpWindow';

export type PopUpWindowProps = {};

export default {
  title: 'PopUpWindow',
  component: PopUpWindow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof PopUpWindow>;

export const Default: StoryObj<typeof PopUpWindow> = {
  args: {
    title: 'Welcome',
    subtitle: 'subtitle subtitle subtitle',
    isWelcomePage: true,
    buttonLabel: 'Start',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
