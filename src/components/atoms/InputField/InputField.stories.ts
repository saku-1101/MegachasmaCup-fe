import { Meta, StoryObj } from '@storybook/react';

import { InputField } from './InputField';

export type InputFieldProps = {};

export default {
  title: 'Field/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof InputField>;

export const Default: StoryObj<typeof InputField> = {
  args: {
    label: 'ユーザ名',
    placeholder: 'Username',
  },
};
