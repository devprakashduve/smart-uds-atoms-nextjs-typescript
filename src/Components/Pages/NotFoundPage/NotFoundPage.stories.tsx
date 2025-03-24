import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NotFoundPage from '.';

export default {
  title: 'Components/Pages/NotFoundPage',
  component: NotFoundPage,
} as Meta;

export const Default = {
  title: '404',
  message: 'Page not found',
  homeLinkText: 'Go back home',
  homeLinkHref: '/',
  contactLinkText: 'Contact support',
  contactLinkHref: '/contact',
  sorryMessage: 'Sorry, we couldn’t find the page you’re looking for.',
};

export const CustomText = {
  title: '500',
  message: 'Server Error',
  homeLinkText: 'Go to dashboard',
  homeLinkHref: '/dashboard',
  contactLinkText: 'Report issue',
  contactLinkHref: '/report',
  sorryMessage: 'We are experiencing some technical difficulties.',
};
