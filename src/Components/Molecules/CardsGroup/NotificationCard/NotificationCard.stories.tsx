import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NotificationCard from '.';
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
  icon: <Icon name="bell" variant={'outline'} />,
  titleText: 'New Message',
  messageText: 'You have received a new message from Dev.',
};

export const WithDifferentIcon = Template.bind({});
WithDifferentIcon.args = {
  icon: <Icon name="mail" variant={'outline'} />,
  titleText: 'New Email',
  messageText: 'You have received a new email from John.',
};
