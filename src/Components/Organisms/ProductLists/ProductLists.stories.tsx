import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductLists from '.';

export default {
  title: 'Components/Organisms/ProductLists',
  component: ProductLists,
} as Meta;

const Template: StoryFn = (args) => <ProductLists {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithProducts = Template.bind({});
WithProducts.args = {
  // Add props with products here
};
