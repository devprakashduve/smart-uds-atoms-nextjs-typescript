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
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/subcategory' },
  ],
  separator: '>',
};

export const WithoutCustomLinks = Template.bind({});
WithoutCustomLinks.args = {
  items: [{ label: 'Home' }, { label: 'Category' }, { label: 'Subcategory' }],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: [
    { label: 'Dashboard', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Profile', href: '/users/profile' },
  ],
  separator: '/',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  items: [
    { label: 'Dashboard', href: '/' },
    { label: 'Settings', href: '/settings' },
  ],
  className: 'text-red-500',
};
export const Comparison = Template.bind({});
Comparison.args = {
  items: [
    { label: 'Overview', href: '/' },
    { label: 'Reports', href: '/reports' },
    { label: 'Comparison', href: '/reports/comparison' },
  ],
  separator: '>',
};
