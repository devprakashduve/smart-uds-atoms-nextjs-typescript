import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DashboardSideBar from '.';
import { DashboardSideBarProps } from './DashboardSidebarProps.interface';

export default {
  title: 'Components/Organisms/DashboardSideBar',
  component: DashboardSideBar,
} as Meta;

const Template: StoryFn<DashboardSideBarProps> = (args) => (
  <DashboardSideBar {...args} />
);

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
  logo: 'https://via.placeholder.com/150x50?text=Logo',
  navigationCustomLinks: [
    { label: 'Dashboard', icon: 'dashboard', url: '/dashboard' },
    { label: 'Analytics', icon: 'analytics', url: '/dashboard/analytics' },
    { label: 'Settings', icon: 'settings', url: '/dashboard/settings' },
    { label: 'Profile', icon: 'account_circle', url: '/dashboard/profile' },
  ],
  onCustomLinkClick: (url) => console.log('Navigating to:', url),
};
