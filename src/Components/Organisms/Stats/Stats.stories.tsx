import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Stats from '.';

export default {
  title: 'Components/Organisms/Stats',
  component: Stats,
} as Meta;

const Template: StoryFn = (args) => <Stats {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomData = Template.bind({});
WithCustomData.args = {
  // Add custom props here
};
