import { Meta, StoryObj } from '@storybook/react';

import { ClassCard } from './ClassCard';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

export type ClassCardProps = {};

export default {
  title: 'Card/ClassCard',
  component: ClassCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof ClassCard>;

export const Default: StoryObj<typeof ClassCard> = {
  decorators: [
    (Story) => (
      <WrapperContainer>
        <CoreContainer>
          <Story />
        </CoreContainer>
      </WrapperContainer>
    ),
  ],
  args: {
    title: '線形代数Ⅱ',
    numOfStudent: 20,
    numOfNote: 30,
  },
};
