import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CategoryPreviews from '.';

export default {
  title: 'Components/Molecules/CategoryPreviews',
  component: CategoryPreviews,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof CategoryPreviews> = (args) => (
  <CategoryPreviews {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Collections',
  categories: [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: '/images/avatar.jpg',
      imageAlt:
        'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: '/images/avatar.jpg',
      imageAlt:
        'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: '/images/avatar.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ],
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  title: 'Custom Collections',
  categories: [
    {
      name: 'Fitness',
      description: 'Gym and workout gear',
      imageSrc: '/images/avatar.jpg',
      imageAlt:
        'Gym equipment including dumbbells, yoga mat, and water bottle.',
      href: '#',
    },
    {
      name: 'Cooking',
      description: 'Kitchen essentials',
      imageSrc: '/images/avatar.jpg',
      imageAlt: 'Cooking utensils and ingredients on a kitchen counter.',
      href: '#',
    },
    {
      name: 'Gardening',
      description: 'Tools and accessories for gardening',
      imageSrc: '/images/avatar.jpg',
      imageAlt: 'Gardening tools and plants on a wooden table.',
      href: '#',
    },
  ],
};
