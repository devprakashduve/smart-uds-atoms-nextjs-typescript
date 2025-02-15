import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Testimonials from '.';

export default {
  title: 'Components/Organisms/Testimonials',
  component: Testimonials,
} as Meta;

const Template: StoryFn = (args) => <Testimonials {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
