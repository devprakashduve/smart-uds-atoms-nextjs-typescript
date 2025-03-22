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
  home: 'Start',
  company: 'menus',
  marketplace: 'Products',
  resources: 'Help',
  contact: 'Support',
  onlineStores: 'Store',
  segmentation: 'Audience',
  marketingCRM: 'Email',
  ourBlog: 'Blog',
  termsConditions: 'Legal',
  previewDashboard: 'New Dashboard',
  getStarted: 'Go',
  udsLogoAlt: 'uds Logo',
  udsText: 'uds',
  backgroundImage: '../images/avatar.jpg',
};
