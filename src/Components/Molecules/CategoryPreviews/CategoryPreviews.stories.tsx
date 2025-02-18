import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CategoryPreviews from '.';

export default {
  title: 'Components/Molecules/CategoryPreviews',
  component: CategoryPreviews,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => <CategoryPreviews {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  // Add custom props here
};
