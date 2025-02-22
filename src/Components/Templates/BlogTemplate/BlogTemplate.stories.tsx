import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BlogTemplate from '.';
import { BlogTemplateProps } from './BlogTemplateProps.interface';

export default {
  title: 'Components/Templates/BlogTemplate',
  component: BlogTemplate,
} as Meta;

const Template: StoryFn<BlogTemplateProps> = (args) => (
  <BlogTemplate {...args} />
);

export const DefaultBlogTemplate = Template.bind({});
DefaultBlogTemplate.args = {
  title: 'How to Build a React Application',
  date: 'December 24, 2024',
  description:
    'In this post, we will explore how to build a simple React application using the latest features of React.',
  children: (
    <>
      <h2 className="mt-6 text-2xl font-semibold text-gray-800">
        Introduction
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        React is a powerful library that allows you to build dynamic user
        interfaces for web applications.
      </p>
      <h3 className="mt-6 text-xl font-semibold text-gray-800">
        Setting Up React
      </h3>
      <p className="mt-4 text-lg text-gray-600">
        To get started with React, we need to install the necessary dependencies
        and set up a project structure.
      </p>
    </>
  ),
};
