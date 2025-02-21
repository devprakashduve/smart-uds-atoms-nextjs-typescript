import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProfileCard from './index';

export default {
  title: 'Components/Molecules/CardsGroup/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  coverImageUrl: '/images/avatar.jpg',
  profileImageUrl: '/images/avatar.jpg',
  userName: 'Dubey Dev',
  userTitle: 'Software Engineer',
};
