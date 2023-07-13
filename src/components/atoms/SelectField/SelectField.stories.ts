import { Meta, StoryObj } from '@storybook/react';

import { SelectField } from './SelectField';

export type SelectFieldProps = {};

export default {
  title: 'Field/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof SelectField>;

export const Default: StoryObj<typeof SelectField> = {
  args: {
    label: '大学',
    placeholder: 'Select',
  },
};
