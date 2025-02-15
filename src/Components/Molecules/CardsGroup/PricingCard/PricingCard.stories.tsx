import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PricingCard from '.';

export default {
  title: 'Components/Molecules/CardsGroup/PricingCard',
  component: PricingCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof PricingCard> = (args) => (
  <PricingCard {...args} />
);

export const ProPlan = Template.bind({});
ProPlan.args = {
  title: 'Pro Plan',
  description: 'Best for growing businesses',
  price: '₹1,499/mo',
  features: ['Unlimited Projects', '24/7 Support', 'Advanced Analytics'],
  buttonText: 'Get Started',
};

export const BasicPlan = Template.bind({});
BasicPlan.args = {
  title: 'Basic Plan',
  description: 'Best for individuals',
  price: '₹499/mo',
  features: ['5 Projects', 'Email Support', 'Basic Analytics'],
  buttonText: 'Get Started',
};
