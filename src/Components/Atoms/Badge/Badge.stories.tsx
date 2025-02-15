import React from 'react';
import Badge from './index';

export default {
  title: 'Components/Atoms/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    scale: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    backgroundColor: { control: 'color' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <span>&#10753;</span>,
    variant: 'primary',
    backgroundColor: '#6366f1',
    scale: 'lg',
  },
};

export const Primary = {
  args: {
    children: <span>&#10003; Primary</span>,
    variant: 'primary',
    scale: 'base',
  },
};

export const Secondary = {
  args: {
    children: <span>&#9881; Secondary</span>,
    variant: 'secondary',
    scale: 'xl',
  },
};

export const Outline = {
  args: {
    children: <span>&#10539; Outline</span>,
    variant: 'outline',
    scale: 'sm',
  },
};

export const Ghost = {
  args: {
    children: <span>&#128683; Ghost</span>,
    variant: 'ghost',
    scale: 'xs',
  },
};
