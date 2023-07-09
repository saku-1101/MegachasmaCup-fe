import { Meta, StoryObj } from "@storybook/react";

import { LandingLogo } from './LandingLogo';

export type LandingLogoProps = {};

export default {
  title: "LandingLogo",
  component: LandingLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof LandingLogo>;

export const Default: StoryObj<typeof LandingLogo> = {};
