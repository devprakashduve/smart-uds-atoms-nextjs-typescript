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
  return (
    <CTACard
      email={args.email}
      onChange={(event) => {
        return event.target.value;
      }}
      onSubscribe={args.onSubscribe}
      title={args.title || ''}
      btnText={args.btnText || ''}
      paraText={args.paraText || ''}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  email: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    return e.target.value;
  },
  onSubscribe: (value: string) => console.log('===Subscribed', value),
  title: 'Join Our Newsletter',
  btnText: 'Subscribe',
  paraText: 'Get the latest updates straight to your inbox.',
};
