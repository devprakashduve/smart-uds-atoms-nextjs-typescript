import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SidebarMenu from '.';
import { SidebarMenuProps } from './SidebarMenuProps.interface';

export default {
  title: 'Components/Molecules/SidebarMenu',
  component: SidebarMenu,
} as Meta;

const Template: StoryFn<SidebarMenuProps> = (args) => <SidebarMenu {...args} />;

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
  items: [
    {
      label: 'Dashboard',
      icon: '🏠',
      link: '/dashboard',
    },
    {
      label: 'Settings',
      icon: '⚙️',
      link: '/settings',
      subMenu: [
        { label: 'Profile', link: '/settings/profile' },
        { label: 'Security', link: '/settings/security' },
      ],
    },
    {
      label: 'Help',
      icon: '❓',
      link: '/help',
    },
  ],
  isCollapsed: false,
};
