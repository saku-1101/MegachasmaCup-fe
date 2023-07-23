import { Meta, StoryObj } from '@storybook/react';

import { SubjectSelectComponent } from './SubjectSelectComponent';

export type SubjectSelectComponentProps = {};

export default {
  title: 'SubjectSelectComponent',
  component: SubjectSelectComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof SubjectSelectComponent>;

export const Default: StoryObj<typeof SubjectSelectComponent> = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
