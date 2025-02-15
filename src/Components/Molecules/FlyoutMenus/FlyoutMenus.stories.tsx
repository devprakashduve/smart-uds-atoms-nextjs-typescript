import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlyoutMenus from '.';
import { FlyoutMenusProps } from './FlyoutMenus.interface';

export default {
  title: 'Components/Molecules/FlyoutMenus',
  component: FlyoutMenus,
} as Meta;

const Template: StoryFn<FlyoutMenusProps> = (args) => <FlyoutMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  solutions: [
    {
      name: 'Analytics',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: 'chartPie',
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers',
      href: '#',
      icon: 'cursorArrowRays',
    },
    {
      name: 'Security',
      description: "Your customers' data will be safe and secure",
      href: '#',
      icon: 'fingerPrint',
    },
    {
      name: 'Integrations',
      description: 'Connect with third-party tools',
      href: '#',
      icon: 'squaresPlus',
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will convert',
      href: '#',
      icon: 'arrowPath',
    },
    {
      name: 'Notifications',
      description: 'Stay updated with real-time alerts',
      href: '#',
      icon: 'bellAlert',
    },
    {
      name: 'Ideas',
      description: 'Capture and manage your ideas',
      href: '#',
      icon: 'lightBulb',
    },
  ],
  callsToAction: [
    { name: 'Watch demo', href: '#', icon: 'playCircle' },
    { name: 'Contact sales', href: '#', icon: 'phone' },
    { name: 'Chat with us', href: '#', icon: 'chatBubbleLeftRight' },
    { name: 'Send an email', href: '#', icon: 'envelop' },
  ],
};
