import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CTACard from '.';
import { CTACardProps } from './CTACardProps.interface';

export default {
  title: 'Components/Molecules/CardsGroup/CTACard',
  component: CTACard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<CTACardProps> = (args) => {
  const [email, setEmail] = useState(args.email);

  return (
    <CTACard
      email={email}
      onEmailChange={(newEmail) => setEmail(newEmail)}
      onSubscribe={args.onSubscribe}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  email: '',
  onEmailChange: (email: string) => console.log(email),
  onSubscribe: () => console.log('Subscribed'),
};
