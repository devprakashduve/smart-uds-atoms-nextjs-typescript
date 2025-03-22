import React from 'react';
import MegaMenu from './index';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Organisms/HeaderGroup/MegaMenu',
  component: MegaMenu,
} as Meta<typeof MegaMenu>;

const Template: StoryFn<typeof MegaMenu> = (args) => <MegaMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: '../images/logo.png',
  menuItems: [
    { label: 'Start', href: '#' },
    {
      label: 'Menus',
      children: [
        { label: 'Store', href: '#' },
        { label: 'Audience', href: '#' },
        { label: 'Email', href: '#' },
        { label: 'Store 2', href: '#' },
      ],
    },
    { label: 'Products', href: '#' },
    { label: 'Help', href: '#' },
  ],
  dropdownLinks: [
    { label: 'Store', href: '#' },
    { label: 'Audience', href: '#' },
    { label: 'Email', href: '#' },
    { label: 'Store', href: '#' },
  ],
  contact: 'Support',
  previewDashboard: 'New Dashboard',
  getStarted: 'Go',
  udsLogoAlt: 'uds Logo',
  udsText: 'uds',
  backgroundImage: '../images/avatar.jpg',
};
