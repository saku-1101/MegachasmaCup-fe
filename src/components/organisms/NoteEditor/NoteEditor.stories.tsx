import { Meta, StoryObj } from '@storybook/react';

import { NoteEditor } from './NoteEditor';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

export type NoteProps = {};

export default {
  title: 'Note/NoteEditor',
  component: NoteEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof NoteEditor>;

export const Default: StoryObj<typeof NoteEditor> = {
  decorators: [
    (Story) => (
      <WrapperContainer>
        <CoreContainer>
          <Story />
        </CoreContainer>
      </WrapperContainer>
    ),
  ],
};
