import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CTASections from '.';

export default {
  title: 'Components/Organisms/CTASections',
  component: CTASections,
} as Meta;

const Template: StoryFn = (args) => <CTASections {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  // Add custom props here
};
