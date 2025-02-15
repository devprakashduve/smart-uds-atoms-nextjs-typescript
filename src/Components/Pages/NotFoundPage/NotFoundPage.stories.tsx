import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NotFoundPage from '.';

export default {
  title: 'Components/Pages/NotFoundPage',
  component: NotFoundPage,
} as Meta;

const Template: StoryFn = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
