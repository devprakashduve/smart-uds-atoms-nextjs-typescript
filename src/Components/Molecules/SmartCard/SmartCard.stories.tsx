import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CardProps } from './SmartCard.interface';
import SmartCard from '.';
import Button from '@/Components/Atoms/Button';

export default {
  title: 'Components/Molecules/Card',
  component: SmartCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<CardProps> = (args) => <SmartCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: 'Card Title',
  bodyContent:
    'This is a description of the card content. It can be a brief summary of the content displayed within the card.',
  imageUrl: '/images/avatar.jpg',
  footerContent: (
    <Button className="rounded-md px-4 py-2 text-white">Action</Button>
  ),
};

export const WithoutImageCard = Template.bind({});
WithoutImageCard.args = {
  title: 'Card Title',
  bodyContent: (
    <p className="mt-2 text-gray-600">
      This is a description of the card content.
    </p>
  ),
  footerContent: (
    <Button className="rounded-md px-4 py-2 text-white">Action</Button>
  ),
};
