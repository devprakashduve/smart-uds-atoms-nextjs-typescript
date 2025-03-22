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
  home: 'Home',
  company: 'Company',
  marketplace: 'Marketplace',
  resources: 'Resources',
  contact: 'Contact',
};

export const CustomText = Template.bind({});
CustomText.args = {
  home: 'Start',
  company: 'About Us',
  marketplace: 'Products',
  resources: 'Help',
  contact: 'Support',
};
