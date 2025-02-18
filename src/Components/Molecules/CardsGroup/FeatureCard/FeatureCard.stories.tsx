import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FeatureCard from './index';

export default {
  title: 'Components/Molecules/CardsGroup/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof FeatureCard> = (args) => (
  <FeatureCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  iconName: 'home',
  title: 'Feature Title',
  description: 'A short description of this amazing feature.',
};
