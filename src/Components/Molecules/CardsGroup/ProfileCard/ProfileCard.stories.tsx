import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProfileCard from './index';

export default {
  title: 'Components/Molecules/CardsGroup/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args: any) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  coverImage: '/images//avatar.jpg',
  profileImage: '/images//avatar.jpg',
  name: 'Dubey Dev',
  title: 'Software Engineer',
};
