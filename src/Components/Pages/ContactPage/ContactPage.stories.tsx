import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactPage from '.';

export default {
  title: 'Components/Pages/ContactPage',
  component: ContactPage,
} as Meta;

const Template: StoryFn = (args) => <ContactPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
