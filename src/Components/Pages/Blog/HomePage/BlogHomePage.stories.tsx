import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BlogHomePage from './index';

const meta: Meta<typeof BlogHomePage> = {
  title: 'Pages/Blog/HomePage',
  component: BlogHomePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogHomePage>;

export const Default: Story = {};
