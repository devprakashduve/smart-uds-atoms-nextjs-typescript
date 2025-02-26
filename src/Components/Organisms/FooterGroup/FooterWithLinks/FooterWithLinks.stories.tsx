import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FooterWithLinks from '.';
import { FooterWithLinksProps } from './FooterWithLinks.interface';

export default {
  title: 'Components/Organisms/FooterGroup/FooterWithLinks',
  component: FooterWithLinks,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<FooterWithLinksProps> = (args) => (
  <FooterWithLinks {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Useful Links',
  description: 'Here are some useful links for you to explore.',
  links: [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' },
    { text: 'Blog', href: '/blog' },
    { text: 'Careers', href: '/careers' },
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms of Service', href: '/terms' },
  ],
  SocialMediaLinks: [
    { href: '#', iconName: 'facebook' },
    { href: '#', iconName: 'twitter' },
    { href: '#', iconName: 'instagram' },
  ],
};
