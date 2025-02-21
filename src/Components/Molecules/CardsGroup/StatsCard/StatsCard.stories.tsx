import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StatsCard from '.';

export default {
  title: 'Components/Molecules/CardsGroup/StatsCard',
  component: StatsCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof StatsCard> = (args) => <StatsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardTitle: 'Total Sales',
  cardValue: '₹ 1,20,500',
  cardLastUpdated: '1 hour ago',
};
