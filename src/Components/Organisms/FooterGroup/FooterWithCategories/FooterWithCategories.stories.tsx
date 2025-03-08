import { Meta, StoryFn } from '@storybook/react';
import FooterWithCategories from '.';
import { FooterWithCategoriesProps } from './FooterWithCategories.interface';

export default {
  title: 'Components/Organisms/FooterGroup/FooterWithCategories',
  component: FooterWithCategories,
  parameters: {
    docs: {
      description: {
        component:
          'A footer component displaying multiple categories with links and social media icons.',
      },
    },
  },
  argTypes: {
    categories: {
      control: 'object',
      description: 'List of category sections with links',
    },
    subscribePlaceholder: {
      control: 'text',
      description: 'Placeholder text for email input',
    },
    subscribeButtonText: {
      control: 'text',
      description: 'Text for the subscribe button',
    },
    subscribeMessage: {
      control: 'text',
      description: 'Message displayed below the subscription input',
    },
    socialLinks: {
      control: 'object',
      description: 'List of social media links with icons',
    },
  },
} as Meta;

const Template: StoryFn<FooterWithCategoriesProps> = (args) => (
  <FooterWithCategories {...args} />
);

export const Default = Template.bind({});
Default.args = {
  categories: [
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
  ],
  subscribePlaceholder: 'Enter your email',
  subscribeButtonText: 'Subscribe',
  subscribeMessage: 'Stay updated with our latest news.',
  socialLinks: [
    { name: 'facebook', href: '#' },
    { name: 'twitter', href: '#' },
    { name: 'instagram', href: '#' },
    { name: 'linkedin', href: '#' },
  ],
};
