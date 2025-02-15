import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductOverviews from '.';

export default {
  title: 'Components/Organisms/ProductOverviews',
  component: ProductOverviews,
} as Meta;

const Template: StoryFn = (args) => <ProductOverviews {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  // Add custom props here
};
