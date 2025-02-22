import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navigation from '.';

export default {
  title: 'Components/Organisms/Navigation',
  component: Navigation,
} as Meta;

const Template: StoryFn = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  // Add custom props here
};
