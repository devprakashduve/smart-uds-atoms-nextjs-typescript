import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderSections from '.';

export default {
  title: 'Components/Organisms/HeaderSections',
  component: HeaderSections,
} as Meta;

const Template: StoryFn = (args) => <HeaderSections {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
  // Add custom props here
  title: 'Custom Title',
};
