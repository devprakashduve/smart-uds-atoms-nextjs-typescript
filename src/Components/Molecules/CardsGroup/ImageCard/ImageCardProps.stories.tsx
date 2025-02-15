import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ImageCard from '.';
import { ImageCardProps } from './ImageCardProps.interface';

export default {
  title: 'Components/Molecules/CardsGroup/ImageCard',
  component: ImageCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ImageCardProps> = (args: ImageCardProps) => (
  <ImageCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a simple card description with an image and title.',
  imageUrl: '/images/avatar.jpg',
};
