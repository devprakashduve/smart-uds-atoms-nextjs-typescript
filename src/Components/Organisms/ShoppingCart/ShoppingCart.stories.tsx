import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ShoppingCart from '.';
import { ShoppingCartProps } from './ShoppingCartProps.interface';

export default {
  title: 'Components/Organisms/ShoppingCart',
  component: ShoppingCart,
} as Meta;

const Template: StoryFn<ShoppingCartProps> = (args) => (
  <ShoppingCart {...args} />
);

export const DefaultShoppingCart = Template.bind({});
DefaultShoppingCart.args = {
  items: [
    {
      id: '1',
      name: 'Product 1',
      price: 19.99,
      quantity: 2,
      imageUrl: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
      imageUrl: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      name: 'Product 3',
      price: 9.99,
      quantity: 3,
      imageUrl: 'https://via.placeholder.com/50',
    },
  ],
  onUpdateQuantity: (id, quantity) =>
    console.log(`Updated item ${id} quantity to ${quantity}`),
  onRemoveItem: (id) => console.log(`Removed item with ID ${id}`),
  onCheckout: () => console.log('Proceeding to checkout'),
};
