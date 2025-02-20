import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductCard from '.';

export default {
  title: 'Components/Molecules/CardsGroup/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ratingText: '3.4',
  addToCartText: 'Add to Cart',
  imageUrl: '/images/avatar.jpg',
  productName: 'Sample Product',
  price: '₹999',
  onAddToCart: () => alert('Added to cart'),
};
