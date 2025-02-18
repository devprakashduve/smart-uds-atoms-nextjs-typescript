import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from '.';
import { CardProps } from './CardProps.interface';

export default {
  title: 'Components/Molecules/Card',
  component: Card,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: 'Card Title',
  description:
    'This is a description of the card content. It can be a brief summary of the content displayed within the card.',
  imageUrl: 'https://via.placeholder.com/400x200',
  footerContent: (
    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
      Action
    </button>
  ),
};

export const WithoutImageCard = Template.bind({});
WithoutImageCard.args = {
  title: 'Card Title',
  description: 'This is a description of the card content.',
  footerContent: (
    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
      Action
    </button>
  ),
};
