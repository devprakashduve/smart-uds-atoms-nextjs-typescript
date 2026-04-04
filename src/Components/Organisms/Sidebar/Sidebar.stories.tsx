import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Sidebar from './index';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const items = [
  { id: 1, label: 'Dashboard', href: '#', iconName: 'home' },
  { id: 2, label: 'Users', href: '#', iconName: 'user' },
  { id: 3, label: 'Settings', href: '#', iconName: 'cog' },
  { id: 4, label: 'Notifications', href: '#', iconName: 'bell' },
];

export const Default: Story = {
  args: {
    items,
    header: <div className="p-4 font-bold text-lg border-b">MyApp</div>,
    footer: <div className="p-4 border-t text-sm text-gray-500">v1.0.0</div>,
  },
};

export const Collapsible: Story = {
  args: {
    items,
    collapsible: true,
    header: <div className="p-4 font-bold overflow-hidden whitespace-nowrap">Admin Panel</div>,
  },
};

export const WithoutHeaderFooter: Story = {
  args: {
    items,
  },
};

export const CustomColors: Story = {
  args: {
    items,
    className: 'bg-indigo-900 border-indigo-800',
    header: <div className="p-4 font-bold text-white">Dark Mode</div>,
  },
};
