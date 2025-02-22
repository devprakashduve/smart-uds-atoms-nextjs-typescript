import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AboutTemplate from '.';
import { AboutTemplateProps } from './AboutTemplateProps.interface';

export default {
  title: 'Components/Templates/AboutTemplate',
  component: AboutTemplate,
} as Meta;

const Template: StoryFn<AboutTemplateProps> = (args) => (
  <AboutTemplate {...args} />
);

export const DefaultAboutTemplate = Template.bind({});
DefaultAboutTemplate.args = {
  title: 'About Us',
  description: 'Learn more about our company, mission, and team.',
  children: (
    <div className="team-section mt-8">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Team</h2>
      <p className="text-lg text-gray-600">
        We are a diverse group of passionate individuals committed to building
        excellent products.
      </p>
    </div>
  ),
};
