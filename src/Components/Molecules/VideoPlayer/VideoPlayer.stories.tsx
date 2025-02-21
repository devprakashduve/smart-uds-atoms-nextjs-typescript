import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import VideoPlayer from '.';
import { VideoPlayerProps } from './VideoPlayerProps.interface';

export default {
  title: 'Components/Molecules/VideoPlayer',
  component: VideoPlayer,
} as Meta;

const Template: StoryFn<VideoPlayerProps> = (args) => <VideoPlayer {...args} />;

export const DefaultVideoPlayer = Template.bind({});
DefaultVideoPlayer.args = {
  src: 'https://www.w3schools.com/html/movie.mp4',
  title: 'Sample Video',
  poster: 'https://via.placeholder.com/640x360.png?text=Video+Poster',
  autoplay: false,
  controls: false,
};
