import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductDetailsTemplate from '.';
import { ProductDetailsTemplateProps } from './ProductDetailsTemplateProps.interface';

export default {
  title: 'Components/Templates/ProductDetailsTemplate',
  component: ProductDetailsTemplate,
} as Meta;

const Template: StoryFn<ProductDetailsTemplateProps> = (args) => (
  <ProductDetailsTemplate {...args} />
);

export const DefaultProductDetailsTemplate = Template.bind({});
DefaultProductDetailsTemplate.args = {
  title: 'Product Title',
  description: 'A detailed description of the product goes here.',
  price: '$199.99',
  image: 'https://via.placeholder.com/600x400.png',
  relatedProducts: (
    <ul>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Related Product 1
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Related Product 2
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Related Product 3
        </a>
      </li>
    </ul>
  ),
  children: (
    <div>
      <h2 className="text-xl font-semibold text-gray-800">Product Features</h2>
      <ul className="mt-4 text-gray-600">
        <li>- High-quality material</li>
        <li>- Modern design</li>
        <li>- Available in multiple colors</li>
        <li>- Free shipping on orders over $50</li>
      </ul>
    </div>
  ),
};
