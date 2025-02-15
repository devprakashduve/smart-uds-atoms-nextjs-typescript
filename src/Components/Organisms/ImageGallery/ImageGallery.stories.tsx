import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ImageGallery from '.';
import { ImageGalleryProps } from './ImageGalleryProps.interface';

export default {
  title: 'Components/Organisms/ImageGallery',
  component: ImageGallery,
} as Meta;

const Template: StoryFn<ImageGalleryProps> = (args) => (
  <ImageGallery {...args} />
);

export const DefaultGallery = Template.bind({});
DefaultGallery.args = {
  images: [
    { src: 'https://via.placeholder.com/400x300?text=Image+1', alt: 'Image 1' },
    { src: 'https://via.placeholder.com/400x300?text=Image+2', alt: 'Image 2' },
    { src: 'https://via.placeholder.com/400x300?text=Image+3', alt: 'Image 3' },
    { src: 'https://via.placeholder.com/400x300?text=Image+4', alt: 'Image 4' },
    { src: 'https://via.placeholder.com/400x300?text=Image+5', alt: 'Image 5' },
    { src: 'https://via.placeholder.com/400x300?text=Image+6', alt: 'Image 6' },
  ],
  columns: 3,
  onImageClick: (src) => alert(`Image clicked: ${src}`),
};
