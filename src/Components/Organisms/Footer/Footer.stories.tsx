import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Components/Organisms/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
