import { Meta, StoryObj } from '@storybook/react';

import { AccountCard } from './AccountCard';
import { WrapperContainer } from '@/components/common/containers';

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
    userObj: {
      getUser: [
        {
          id: 'user_12345',
          imageUrl: 'https://example.com/user_12345.jpg',
          name: 'John Doe',
          email: 'john.doe@example.com',
          userSchool: [
            {
              id: 'school_1',
              name: 'ABC University',
            },
          ],
        },
      ],
    },
  },
};
