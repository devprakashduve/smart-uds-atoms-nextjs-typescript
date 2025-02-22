import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductFeatures from '.';

export default {
  title: 'Components/Organisms/ProductFeatures',
  component: ProductFeatures,
} as Meta;

const Template: StoryFn = (args) => <ProductFeatures {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomFeatures = Template.bind({});
WithCustomFeatures.args = {
  // Add custom props here
};
