import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EcommerceTemplate from './index';

const meta: Meta<typeof EcommerceTemplate> = {
  title: 'Components/Templates/EcommerceTemplate',
  component: EcommerceTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof EcommerceTemplate>;

export const Default: Story = {
  args: {
    logo: <div className="text-xl font-bold">StoreLogo</div>,
    searchBar: <div className="w-full bg-gray-100 p-2 rounded">Search...</div>,
    cart: <div className="p-2">🛒 (3)</div>,
    userMenu: <div className="p-2">👤</div>,
    navigation: (
      <nav className="flex space-x-4">
        <a href="#">Shop</a>
        <a href="#">Offers</a>
        <a href="#">Brands</a>
      </nav>
    ),
    hero: (
      <div className="bg-blue-600 text-white p-20 text-center">
        <h1 className="text-4xl font-bold">Big Summer Sale!</h1>
        <p className="mt-4">Up to 70% off on all items</p>
      </div>
    ),
    filters: (
      <div className="space-y-4">
        <h3 className="font-bold">Categories</h3>
        <ul className="space-y-2">
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Home</li>
        </ul>
      </div>
    ),
    products: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border p-4 rounded text-center">
            Product {i}
          </div>
        ))}
      </div>
    ),
    footer: (
      <div className="bg-gray-800 text-white p-10 text-center">
        © 2026 StoreLogo. All rights reserved.
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    logo: <div className="text-xl font-bold">MinimalStore</div>,
    products: <div className="p-10 text-center">Main Content Area</div>,
  },
};
