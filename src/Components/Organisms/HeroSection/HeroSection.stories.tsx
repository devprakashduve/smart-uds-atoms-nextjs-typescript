import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroSection from '.';
import { HeroSectionProps } from './HeroSectionProps.interface';

export default {
  title: 'Components/Organisms/HeroSection',
  component: HeroSection,
} as Meta;

const Template: StoryFn<HeroSectionProps> = (args) => <HeroSection {...args} />;

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  title: 'Welcome to Our Website!',
  subtitle: 'We offer a wide range of products to help you succeed.',
  ctaText: 'Shop Now',
  ctaCustomLink: '/shop',
  backgroundImage: 'https://via.placeholder.com/1600x800?text=Background+Image',
};
