import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SignInRegistration from '.';

export default {
  title: 'Components/Pages/SignInRegistration',
  component: SignInRegistration,
} as Meta;

const Template: StoryFn = (args) => <SignInRegistration {...args} />;

export const Default = Template.bind({});
Default.args = {};
