import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductCard from '.';
import { ProductCardProps } from './ProductCardProps.interface';

export default {
  title: 'Components/Organisms/ProductCard',
  component: ProductCard,
} as Meta;

const Template: StoryFn<ProductCardProps> = (args) => <ProductCard {...args} />;

export const DefaultProductCard = Template.bind({});
DefaultProductCard.args = {
  imageSrc: 'https://via.placeholder.com/400x400?text=Product+Image',
  title: 'Sample Product',
  price: '$29.99',
  description:
    'This is a description of the sample product. It offers great value for money!',
  onAddToCart: () => alert('Product added to cart!'),
};
