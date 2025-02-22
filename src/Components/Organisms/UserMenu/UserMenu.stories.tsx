import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UserMenu from '.';
import { UserMenuProps } from './UserMenuProps.interface';

export default {
  title: 'Components/Organisms/UserMenu',
  component: UserMenu,
} as Meta;

const Template: StoryFn<UserMenuProps> = (args) => <UserMenu {...args} />;

export const DefaultUserMenu = Template.bind({});
DefaultUserMenu.args = {
  username: 'John Doe',
  onProfileClick: () => alert('Navigate to profile'),
  onSettingsClick: () => alert('Navigate to settings'),
  onLogoutClick: () => alert('Logging out'),
};
