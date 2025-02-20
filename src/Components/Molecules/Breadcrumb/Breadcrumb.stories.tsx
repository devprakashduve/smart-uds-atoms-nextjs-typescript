import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Breadcrumbs from '.';
import { BreadcrumbProps } from './BreadcrumbProps.interface';

export default {
  title: 'Components/Molecules/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
      description: 'Separator between breadcrumb items',
    },
    className: { control: 'text', description: 'Additional styling classes' },
  },
} as Meta;

const Template: StoryFn<BreadcrumbProps> = (args) => <Breadcrumbs {...args} />;

export const DefaultBreadcrumbs = Template.bind({});
DefaultBreadcrumbs.args = {
  items: [
    { label: 'Home', href: '/home' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '#' },
  ],
  separator: '>',
};

export const WithoutCustomLinks = Template.bind({});
WithoutCustomLinks.args = {
  items: [
    {
      label: 'Home',
      href: '/#',
    },
    {
      label: 'Category',
      href: '/#',
    },
    {
      label: 'Subcategory',
      href: '#',
    },
  ],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: [
    { label: 'Dashboard', href: '/board' },
    { label: 'Users', href: '/users' },
    { label: 'Profile', href: '#' },
  ],
  separator: '/',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  items: [
    { label: 'Dashboard', href: '/board' },
    { label: 'Settings', href: '#' },
  ],
  className: 'text-red-500',
};
export const Comparison = Template.bind({});
Comparison.args = {
  items: [
    { label: 'Overview', href: '/view' },
    { label: 'Reports', href: '/reports' },
    { label: 'Comparison', href: '#' },
  ],
  separator: '>',
};
