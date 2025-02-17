import { Meta, StoryFn } from '@storybook/react';
import List from '.';

export default {
  title: 'Components/Atoms/List',
  component: List,
} as Meta<typeof List>;

const Template: StoryFn<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'Dubey Dev',
    },
    {
      name: 'Dev Dubey',
    },
    {
      name: 'Siddhant Dwivedi',
    },
  ],
  ordered: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  items: [
    {
      id: 1,
      name: 'Dubey Dev',
      subText: 'test@example.com',
      role: 'Co-Founder / CEO',
      avatar: '/images/avatar.jpg',
      lastSeen: '3h ago',
    },
    {
      id: 2,
      name: 'Dev Dubey',
      subText: 'test@example.com',
      role: 'Co-Founder / CTO',
      avatar: '/images/avatar.jpg',
      lastSeen: '3h ago',
    },
    {
      id: 3,
      name: 'Siddhant Dwivedi',
      subText: 'test@example.com',
      role: 'Business Relations',
      avatar: '/images/avatar.jpg',
      status: 'Online',
    },
  ],
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  items: [
    {
      id: 1,
      name: 'Dubey Dev',
      subText: 'test@example.com',

      lastSeen: '3h ago',
    },
    {
      id: 2,
      name: 'Dev Dubey',
      subText: 'test@example.com',

      lastSeen: '3h ago',
    },
    {
      id: 3,
      name: 'Siddhant Dwivedi',
      subText: 'test@example.com',

      status: 'Online',
    },
  ],
};
