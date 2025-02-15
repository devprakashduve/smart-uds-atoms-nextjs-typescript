import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SocialPostCard from '.';

export default {
  title: 'Components/Molecules/CardsGroup/SocialPostCard',
  component: SocialPostCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof SocialPostCard> = (args: any) => (
  <SocialPostCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    name: 'Alex Johnson',
    avatar: '/images/avatar.jpg',
  },
  timeAgo: '2 hours ago',
  content: 'Just launched a new project! 🚀 Check it out at myportfolio.com.',
  likes: 120,
  comments: 45,
};

export const NoLikesOrComments = Template.bind({});
NoLikesOrComments.args = {
  user: {
    name: 'Jane Doe',
    avatar: '/images/avatar.jpg',
  },
  timeAgo: '5 minutes ago',
  content: 'Excited to share my latest blog post!',
  likes: 0,
  comments: 0,
};

export const AnonymousUser = Template.bind({});
AnonymousUser.args = {
  user: {
    name: 'Anonymous',
    avatar: '/images/default-avatar.jpg',
  },
  timeAgo: 'a moment ago',
  content: 'No content available.',
  likes: 0,
  comments: 0,
};
