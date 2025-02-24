import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MiniFooter from '.';

export default {
  title: 'Components/Organisms/FooterGroup/MiniFooter',
  component: MiniFooter,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof MiniFooter> = (args) => <MiniFooter {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  copyrightText: '© 2024 My Company. All Rights Reserved.',
  links: [
    { label: 'Privacy Policy', url: 'https://www.example.com/privacy' },
    { label: 'Terms of Service', url: 'https://www.example.com/terms' },
    { label: 'Contact Us', url: 'https://www.example.com/contact' },
  ],
};
