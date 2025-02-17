import React from 'react';
import Badge from './index';

export default {
  title: 'Components/Atoms/Badge',
  component: Badge,
  argTypes: {
    scale: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <span>&#10753;</span>,
    variant: 'primary',

    scale: 'lg',
  },
};

export const Primary = {
  args: {
    children: <span>&#10003; Primary</span>,

    scale: 'base',
  },
};

export const Secondary = {
  args: {
    children: <span>&#9881; Secondary</span>,

    scale: 'xl',
  },
};

export const Outline = {
  args: {
    children: <span>&#10539; Outline</span>,

    scale: 'sm',
  },
};

export const Ghost = {
  args: {
    children: <span>&#128683; Ghost</span>,

    scale: 'xs',
  },
};
