import { Meta, StoryObj } from '@storybook/react';

import { Description } from './Description';

export type DescriptionProps = {};

export default {
  title: 'Paragraph/Description',
  component: Description,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof Description>;

export const Default: StoryObj<typeof Description> = {
  args: {
    description: 'description description description description description',
  },
};
