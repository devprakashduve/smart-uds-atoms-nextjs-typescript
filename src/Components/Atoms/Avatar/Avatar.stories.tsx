import type { Meta } from '@storybook/react';
import Avatar from '.';

const metaData = {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'busy', 'away'],
    },
    rounded: {
      control: { type: 'boolean' },
    },
    notification: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Avatar>;

export default metaData;

export const Default = {
  args: {
    src: '/images/avatar.jpg',
    alt: 'User avatar',
    size: 'md',
    status: 'online',
    notification: '3',
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" status="online" src="/images/avatar.jpg" />
      <Avatar size="md" status="online" src="/images/avatar.jpg" />
      <Avatar size="lg" status="online" src="/images/avatar.jpg" />
      <Avatar size="xl" status="online" src="/images/avatar.jpg" />
    </div>
  ),
};

export const StatusIndicators = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar status="online" src="/images/avatar.jpg" />
      <Avatar status="offline" src="/images/avatar.jpg" />
      <Avatar status="busy" src="/images/avatar.jpg" />
      <Avatar status="away" src="/images/avatar.jpg" />
    </div>
  ),
};

export const WithNotifications = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="/images/avatar.jpg" notification="3" />
      <Avatar src="/images/avatar.jpg" notification="New" />
    </div>
  ),
};

export const GroupedAvatars = {
  render: () => (
    <div className="flex items-center -space-x-4">
      <Avatar status="online" src="/images/avatar.jpg" />
      <Avatar status="offline" src="/images/avatar.jpg" />
      <Avatar status="busy" src="/images/avatar.jpg" />
      <Avatar status="away" src="/images/avatar.jpg" />
    </div>
  ),
};

export const InitialAvatars = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar initials="JD" />
      <Avatar initials="AB" />
      <Avatar initials="SR" />
    </div>
  ),
};

export const SquareAvatars = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="/images/avatar.jpg" rounded={false} />
      <Avatar initials="SQ" rounded={false} />
    </div>
  ),
};

export const Playground = {
  args: {
    src: '/images/avatar.jpg',
    size: 'md',
    rounded: true,
    alt: 'Playground avatar',
  },
};
