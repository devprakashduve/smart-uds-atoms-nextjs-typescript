import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import VideoGallery from '.';
import { VideoGalleryProps } from './VideoGalleryProps.interface';

export default {
  title: 'Components/Organisms/VideoGallery',
  component: VideoGallery,
} as Meta;

const Template: StoryFn<VideoGalleryProps> = (args) => (
  <VideoGallery {...args} />
);

export const DefaultVideoGallery = Template.bind({});
DefaultVideoGallery.args = {
  videos: [
    {
      id: '1',
      title: 'Video 1',
      description: 'This is the description for Video 1',
      thumbnailUrl: '/path/to/video1-thumbnail.jpg',
      videoUrl: '/path/to/video1.mp4',
    },
    {
      id: '2',
      title: 'Video 2',
      description: 'This is the description for Video 2',
      thumbnailUrl: '/path/to/video2-thumbnail.jpg',
      videoUrl: '/path/to/video2.mp4',
    },
    {
      id: '3',
      title: 'Video 3',
      description: 'This is the description for Video 3',
      thumbnailUrl: '/path/to/video3-thumbnail.jpg',
      videoUrl: '/path/to/video3.mp4',
    },
  ],
  onVideoClick: (videoUrl) => {
    console.log('Playing video:', videoUrl);
  },
};
