import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroBanner from '.';
import { HeroBannerProps } from './HeroBanner.interface';

export default {
  title: 'Components/Organisms/HeroBanner',
  component: HeroBanner,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    buttonText: { control: 'text' },
    buttonLink: { control: 'text' },
    backgroundImages: { control: 'object' },
    showOverlay: { control: 'boolean' },
    overlayColor: { control: 'color' },
    overlayOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    autoSlide: { control: 'boolean' },
    slideInterval: { control: { type: 'number', min: 1000, step: 1000 } },
    minHeight: { control: 'text' },
    textAlign: { control: 'select', options: ['left', 'center', 'right'] },
    verticalAlign: { control: 'select', options: ['top', 'center', 'bottom'] },
    textBackgroundColor: { control: 'color' },
  },
} as Meta<typeof HeroBanner>;

const Template: StoryFn<HeroBannerProps> = (args) => <HeroBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Website',
  subtitle: 'We build amazing web experiences',
  buttonText: 'Learn More',
  buttonLink: '#',
  backgroundImages: [
    '/bannerImages/banner1.jpg',
    '/bannerImages/banner2.jpg',
    '/bannerImages/banner3.jpg',
  ],
  autoSlide: true,
  showOverlay: true,
  overlayColor: 'black',
  overlayOpacity: 0.5,
  minHeight: '600px',
  textAlign: 'center',
  verticalAlign: 'center',
  textBackgroundColor: 'rgba(0, 0, 0, 0.5)',
};

export const WithoutButton = Template.bind({});
WithoutButton.args = {
  title: 'Explore the World',
  subtitle: 'Join us on an unforgettable journey',
  backgroundImages: ['/bannerImages/banner1.jpg'],
  showOverlay: true,
  overlayColor: 'blue',
  overlayOpacity: 0.3,
  textAlign: 'center',
  verticalAlign: 'center',
  textBackgroundColor: 'rgba(255, 255, 255, 0.7)',
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  title: 'Your Next Adventure Awaits',
  subtitle: 'Plan your dream vacation with us',
  buttonText: 'Get Started',
  buttonLink: '#',
  backgroundImages: ['/bannerImages/banner2.jpg'],
  showOverlay: true,
  overlayColor: 'black',
  overlayOpacity: 0.6,
  textAlign: 'left',
  verticalAlign: 'center',
  textBackgroundColor: 'rgba(0, 0, 0, 0.7)',
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  title: 'A Journey Beyond Imagination',
  subtitle: 'Discover new places with ease',
  buttonText: 'Discover Now',
  buttonLink: '#',
  backgroundImages: ['/bannerImages/banner3.jpg'],
  showOverlay: false,
  textAlign: 'right',
  verticalAlign: 'bottom',
  textBackgroundColor: 'rgba(255, 255, 255, 0.8)',
};

export const WithoutOverlay = Template.bind({});
WithoutOverlay.args = {
  title: 'No Overlay Example',
  subtitle: 'See the background clearly',
  buttonText: 'Explore Now',
  buttonLink: '#',
  backgroundImages: ['/bannerImages/banner1.jpg'],
  showOverlay: false,
  textAlign: 'center',
  verticalAlign: 'top',
  textBackgroundColor: 'rgba(255, 255, 255, 0.6)',
};

export const AutoSlideEnabled = Template.bind({});
AutoSlideEnabled.args = {
  title: 'Dynamic Slideshow',
  subtitle: 'Enjoy seamless transitions',
  buttonText: 'See More',
  buttonLink: '#',
  backgroundImages: [
    '/bannerImages/banner1.jpg',
    '/bannerImages/banner2.jpg',
    '/bannerImages/banner3.jpg',
  ],
  autoSlide: true,
  slideInterval: 3000,
  showOverlay: true,
  overlayColor: 'black',
  overlayOpacity: 0.4,
  textAlign: 'center',
  verticalAlign: 'center',
  textBackgroundColor: 'rgba(0, 0, 0, 0.7)',
};

export const Minimalistic = Template.bind({});
Minimalistic.args = {
  title: 'Minimal Design',
  subtitle: '',
  backgroundImages: ['/bannerImages/banner2.jpg'],
  showOverlay: false,
  textAlign: 'center',
  verticalAlign: 'center',
  textBackgroundColor: 'rgba(0, 0, 0, 0.3)',
};

export const CustomTextBackground = Template.bind({});
CustomTextBackground.args = {
  title: 'Vibrant Text Background',
  subtitle: 'Enhance readability with custom backgrounds',
  buttonText: 'Try Now',
  buttonLink: '#',
  backgroundImages: ['/bannerImages/banner3.jpg'],
  showOverlay: true,
  overlayColor: 'black',
  overlayOpacity: 0.5,
  textAlign: 'center',
  verticalAlign: 'center',
  textBackgroundColor: 'rgba(255, 0, 0, 0.7)',
};
