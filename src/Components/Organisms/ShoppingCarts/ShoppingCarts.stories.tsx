import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ShoppingCarts from '.';

export default {
  title: 'Components/Organisms/ShoppingCarts',
  component: ShoppingCarts,
} as Meta;

const Template: StoryFn = (args) => <ShoppingCarts {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithItems = Template.bind({});
WithItems.args = {
  // Add props with items here
};
