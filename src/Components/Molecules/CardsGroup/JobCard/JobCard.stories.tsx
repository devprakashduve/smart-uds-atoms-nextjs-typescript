import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import JobCard from '.';
import { JobCardProps } from './JobCard.interface';

export default {
  title: 'Components/Molecules/cardsGroup/JobCard',
  component: JobCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<JobCardProps> = (args) => <JobCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Frontend Developer',
  company: 'TechCorp',
  description: 'Looking for a React.js expert with 3+ years of experience.',
  location: 'Remote',
  salary: '₹12LPA',
};
