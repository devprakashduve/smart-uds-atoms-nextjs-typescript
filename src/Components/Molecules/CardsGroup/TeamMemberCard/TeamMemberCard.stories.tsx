import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TeamMemberCard from './index';

export default {
  title: 'Components/Molecules/CardsGroup/TeamMemberCard',
  component: TeamMemberCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof TeamMemberCard> = (args) => (
  <TeamMemberCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Dubey Dev',
  role: 'Full Stack Developer',
  imageUrl: '/images/avatar.jpg',
  linkedInUrl: 'https://linkedin.com',
  gitHubUrl: 'https://github.com',
};
