import { Meta, StoryObj } from "@storybook/react";

import { NoteListPage } from './NoteListPage';


export default {
  title: "NoteListPage",
  component: NoteListPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof NoteListPage>;

export const Default: StoryObj<typeof NoteListPage> = {};
