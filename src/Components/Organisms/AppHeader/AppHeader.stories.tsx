import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AppHeader from '.';
import { AppHeaderProps } from './AppHeaderProps.interface';

export default {
  title: 'Components/Organisms/AppHeader',
  component: AppHeader,
} as Meta;

const Template: StoryFn<AppHeaderProps> = (args) => <AppHeader {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  logo: 'https://via.placeholder.com/150x50?text=Logo',
  navigationCustomLinks: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ],
  onSearch: (query) => console.log('Searching for:', query),
};
