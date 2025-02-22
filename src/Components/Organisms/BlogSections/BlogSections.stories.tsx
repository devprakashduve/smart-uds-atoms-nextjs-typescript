import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BlogSections from '.';

export default {
  title: 'Components/Organisms/BlogSections',
  component: BlogSections,
} as Meta;

const Template: StoryFn = (args) => <BlogSections {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
