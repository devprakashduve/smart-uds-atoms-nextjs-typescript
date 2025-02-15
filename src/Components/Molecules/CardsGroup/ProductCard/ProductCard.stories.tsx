import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductCard from './index';

export default {
  title: 'Components/Molecules/CardsGroup/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => (
  <ProductCard
    ratingText={'3.4'}
    addToCartText={' Add to Cart'}
    imageUrl={''}
    productName={''}
    price={''}
    onAddToCart={function (): void {
      throw new Error('Function not implemented.');
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  ratingText: '3.4',
  addToCartText: ' Add to Cart',
  imageUrl: '/images/avatar.jpg',
  productName: 'Product Name',
  price: '₹999',
  onAddToCart: () => alert('Added to cart'),
};
