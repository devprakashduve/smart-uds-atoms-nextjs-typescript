import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SocialFeedPage from './index';

const meta: Meta<typeof SocialFeedPage> = {
  title: 'Pages/Social/Feed',
  component: SocialFeedPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SocialFeedPage>;

export const Default: Story = {};
