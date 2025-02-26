import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MegaMenuNavBar from './index';
import { MegaMenuNavBarComponentProps } from './MegaMenuNavBar.interface';

export default {
  title: 'Components/Organisms/NavBarGroup/MegaMenuNavBar',
  component: MegaMenuNavBar,
} as Meta<typeof MegaMenuNavBar>;

const Template: StoryFn<MegaMenuNavBarComponentProps> = (args) => (
  <MegaMenuNavBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  navigation: {
    categories: [
      {
        id: 'category1',
        name: 'Category 1',
        featured: [
          {
            name: 'Featured 1',
            href: '#',
            imageSrc: '/images/avatar.jpg',
            imageAlt: 'Featured 1',
          },
        ],
        sections: [
          {
            id: 'section1',
            name: 'Section 1',
            items: [{ name: 'Item 1', href: '#' }],
          },
        ],
      },
      {
        id: 'category2',
        name: 'Category 2',
        featured: [
          {
            name: 'Featured 2',
            href: '#',
            imageSrc: '/images/avatar.jpg',
            imageAlt: 'Featured 1',
          },
          {
            name: 'Featured 3',
            href: '#',
            imageSrc: '/images/avatar.jpg',
            imageAlt: 'Featured 1',
          },
          {
            name: 'Featured 4',
            href: '#',
            imageSrc: '/images/avatar.jpg',
            imageAlt: 'Featured 1',
          },
        ],
        sections: [
          {
            id: 'section2',
            name: 'Section 2',
            items: [
              { name: 'Item 1', href: '#' },
              { name: 'Item 2', href: '#' },
            ],
          },
          {
            id: 'section3',
            name: 'Section 3',
            items: [
              { name: 'Item 13', href: '#' },
              { name: 'Item 23', href: '#' },
            ],
          },
          {
            id: 'section4',
            name: 'Section 4',
            items: [
              { name: 'Item 14', href: '#' },
              { name: 'Item 24', href: '#' },
            ],
          },
          {
            id: 'section5',
            name: 'Section 5',
            items: [
              { name: 'Item 15', href: '#' },
              { name: 'Item 25', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [{ name: 'Page 1', href: '#' }],
  },

  signInText: 'Sign in',
  createAccountText: 'Create account',
  searchBox: true,
  logoSrc: '/images/avatar.jpg',
  logoAlt: 'Your Company',
};

export const WithCustomData = Template.bind({});
WithCustomData.args = {
  navigation: {
    categories: [
      {
        id: 'customCategory1',
        name: 'Custom Category 1',

        sections: [
          {
            id: 'customSection1',
            name: 'Custom Section 1',
            items: [
              { name: 'Custom Item 1', href: '#' },
              { name: 'Custom Item 2', href: '#' },
            ],
          },
          {
            id: 'customSection2',
            name: 'Custom Section 2',
            items: [
              { name: 'Custom Item 3', href: '#' },
              { name: 'Custom Item 4', href: '#' },
            ],
          },
          {
            id: 'customSection3',
            name: 'Custom Section 3',
            items: [
              { name: 'Custom Item 5', href: '#' },
              { name: 'Custom Item 6', href: '#' },
            ],
          },
          {
            id: 'customSection4',
            name: 'Custom Section 4',
            items: [
              { name: 'Custom Item 7', href: '#' },
              { name: 'Custom Item 8', href: '#' },
            ],
          },
          {
            id: 'customSection5',
            name: 'Custom Section 5',
            items: [
              { name: 'Custom Item 9', href: '#' },
              { name: 'Custom Item 10', href: '#' },
            ],
          },
          {
            id: 'customSection6',
            name: 'Custom Section 6',
            items: [
              { name: 'Custom Item 11', href: '#' },
              { name: 'Custom Item 12', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [],
  },
  freeDeliveryText: 'Get free delivery on orders over $100',
  signInText: 'Sign in',
  createAccountText: 'Create account',
  changeCurrencyText: 'Change currency',
  currency: 'CAD',
  logoSrc: '/images/avatar.jpg',
  logoAlt: 'Your Company',
};
export const BlogSite = Template.bind({});
BlogSite.args = {
  navigation: {
    categories: [
      {
        id: 'blogCategory1',
        name: 'Tech',

        sections: [
          {
            id: 'blogSection1',
            name: 'Gadgets',
            items: [{ name: 'New Gadgets', href: '#' }],
          },
        ],
      },
      {
        id: 'blogCategory2',
        name: 'Lifestyle',

        sections: [
          {
            id: 'blogSection2',
            name: 'Fitness',
            items: [{ name: 'Workout Tips', href: '#' }],
          },
        ],
      },
    ],
    pages: [{ name: 'About Us', href: '#' }],
  },
  signInText: 'Sign in',
  createAccountText: 'Create account',
  searchBox: true,
  logoSrc: '/images/avatar.jpg',
  logoAlt: 'Your Company',
};

export const EcommerceSite = Template.bind({});
EcommerceSite.args = {
  navigation: {
    categories: [
      {
        id: 'ecommerceCategory1',
        name: 'Electronics',
        featured: [
          {
            name: 'Top Deals',
            href: '#',
            imageSrc: '/images/avatar.jpg',
            imageAlt: 'Top Deals',
          },
        ],
        sections: [
          {
            id: 'ecommerceSection1',
            name: 'Mobile Phones',
            items: [{ name: 'Latest Phones', href: '#' }],
          },
        ],
      },
      {
        id: 'ecommerceCategory2',
        name: 'Fashion',
        featured: [
          {
            name: 'Trending Now',
            href: '#',
            imageSrc: '/images/avatar.jpg',
            imageAlt: 'Trending Now',
          },
        ],
        sections: [
          {
            id: 'ecommerceSection2',
            name: 'Men',
            items: [{ name: 'New Arrivals', href: '#' }],
          },
          {
            id: 'ecommerceSection3',
            name: 'Women',
            items: [{ name: 'Best Sellers', href: '#' }],
          },
        ],
      },
    ],
    pages: [{ name: 'Contact Us', href: '#' }],
  },
  signInText: 'Sign in',
  createAccountText: 'Create account',
  changeCurrencyText: 'Change currency',
  currency: 'USD',
  logoSrc: '/images/avatar.jpg',
  logoAlt: 'Your Company',
};

export const SocialMediaSite = Template.bind({});
SocialMediaSite.args = {
  navigation: {
    categories: [
      {
        id: 'socialCategory1',
        name: 'Friends',
        featured: [
          {
            name: 'Find Friends',
            href: '#',
            imageSrc: '/images/friends.jpg',
            imageAlt: 'Find Friends',
          },
        ],
        sections: [
          {
            id: 'socialSection1',
            name: 'Friend Requests',
            items: [{ name: 'Pending Requests', href: '#' }],
          },
        ],
      },
      {
        id: 'socialCategory2',
        name: 'Messages',

        sections: [
          {
            id: 'socialSection2',
            name: 'Inbox',
            items: [{ name: 'Unread Messages', href: '#' }],
          },
        ],
      },
    ],
    pages: [{ name: 'Profile', href: '#' }],
  },
  signInText: 'Sign in',
  createAccountText: 'Create account',
  changeCurrencyText: 'Change currency',
  currency: 'USD',
  logoSrc: '/images/avatar.jpg',
  logoAlt: 'Your Company',
};
