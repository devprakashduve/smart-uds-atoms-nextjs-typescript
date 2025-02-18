import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ProductCardWithRating from '.';

export default {
  title: 'Components/Molecules/CardsGroup/ProductCardWithRating',
  component: ProductCardWithRating,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof ProductCardWithRating> = (args) => (
  <ProductCardWithRating {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: '/images/avatar.jpg',
  productName: 'Wireless Headphones',
  description: 'Noise cancellation | 40 hrs battery',
  rating: 3,
  reviewsCount: 1200,
  onAddToCart: () => alert('Added to cart'),
};
