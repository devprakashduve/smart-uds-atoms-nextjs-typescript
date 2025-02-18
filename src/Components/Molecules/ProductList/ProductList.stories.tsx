import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductList from './index';

export default {
  title: 'Components/Molecules/ProductList',
  component: ProductList,
} as Meta<typeof ProductList>;

const Template: StoryFn<typeof ProductList> = (args) => (
  <ProductList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Customers also purchased',
  addToCartText: 'Add to Cart',
  products: [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '/images/avatar.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      description: 'A comfortable and stylish tee for everyday wear.',
      rating: 'Rating: 4.5',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '/images/avatar.jpg',
      imageAlt: "Front of men's Basic Tee in white.",
      price: '$35',
      color: 'White',
      rating: 'Rating: 4.5',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '/images/avatar.jpg',
      imageAlt: "Front of men's Basic Tee in gray.",
      price: '$35',
      color: 'Gray',
      description: 'A comfortable and stylish tee for everyday wear.',
      rating: 'Rating: 4.5',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '/images/avatar.jpg',
      imageAlt: "Front of men's Basic Tee in gray.",
      price: '$35',
      color: 'Gray',
      description: 'A comfortable and stylish tee for everyday wear.',
      rating: 'Rating: 4.5',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: '/images/avatar.jpg',
      imageAlt: "Front of men's Basic Tee in gray.",
      price: '$35',
      color: 'Gray',
      description: 'A comfortable and stylish tee for everyday wear.',
      rating: 'Rating: 4.5',
    },
  ],
};
