import { Meta, StoryObj } from '@storybook/react';

import { AccountCard } from './AccountCard';
import { WrapperContainer } from '@/components/styles/containers';

export type AccountCardProps = {};

export default {
  title: 'AccountCard',
  component: AccountCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<typeof AccountCard>;

export const Default: StoryObj<typeof AccountCard> = {
  decorators: [
    (Story) => (
      <WrapperContainer>
        <div className='md:w-[40%] w-[90%]'>
          <Story />
        </div>
      </WrapperContainer>
    ),
  ],
  args: {
    user: {
      id: '0',
      name: 'student',
      email: 'example@email.com',
      school: 'XX university',
      faculty: 'infomatics',
      year: 4,
    },
  },
};
