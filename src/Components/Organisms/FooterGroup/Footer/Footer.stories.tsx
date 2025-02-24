import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Footer from '.';
import { FooterProps } from './Footer.interface';

export default {
  title: 'Components/Organisms/FooterGroup/Footer',
  component: Footer,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Subscribe to our newsletter',
  description:
    'Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.',
  emailPlaceholder: 'Enter your email',
  buttonText: 'Subscribe',
  articlesTitle: 'Weekly articles',
  articlesDescription:
    'Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.',
  noSpamTitle: 'No spam',
  noSpamDescription:
    'Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.',
};
