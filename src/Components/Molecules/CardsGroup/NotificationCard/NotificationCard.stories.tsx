import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NotificationCard from './index';
import Icon from '@/Components/Atoms/Icon';

export default {
  title: 'Components/Molecules/CardsGroup/NotificationCard',
  component: NotificationCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof NotificationCard> = (args) => (
  <NotificationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: <Icon name="bell" />,
  title: 'New Message',
  message: 'You have received a new message from Dev.',
};
