import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EventCard from '.';

export default {
  title: 'Components/Molecules/CardsGroup/EventCard',
  component: EventCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof EventCard> = (args) => <EventCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  eventTitle: 'Tech Conference 2025',
  eventDescription:
    'Join us for a day of networking and insightful talks on the future of technology.',
  eventDate: 'March 20, 2025',
  eventImageUrl: '/images/avatar.jpg',
};
