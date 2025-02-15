import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Header from '.';
import { HeaderProps } from './Header.interface';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
  // Add custom props here
  title: 'Custom Title',
};
