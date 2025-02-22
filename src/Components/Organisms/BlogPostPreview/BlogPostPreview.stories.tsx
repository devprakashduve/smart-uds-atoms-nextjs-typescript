import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BlogPostPreview from '.';
import { BlogPostPreviewProps } from './BlogPostPreviewProps.interface';

export default {
  title: 'Components/Organisms/BlogPostPreview',
  component: BlogPostPreview,
} as Meta;

const Template: StoryFn<BlogPostPreviewProps> = (args) => (
  <BlogPostPreview {...args} />
);

export const DefaultPreview = Template.bind({});
DefaultPreview.args = {
  title: 'How to Build a Simple React App',
  excerpt:
    'In this blog post, we will go through the steps of building a simple React app. This tutorial will cover setting up the environment, creating components, and managing state.',
  slug: 'how-to-build-a-simple-react-app',
  date: 'January 20, 2024',
};
