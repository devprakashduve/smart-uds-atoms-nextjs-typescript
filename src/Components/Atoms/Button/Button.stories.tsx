import React from 'react';
import Button from '.';
import { ButtonSize } from './ButtonProps.interface';
import { ArrowDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'outline',
        'pill',
        'pill-outline',
        'bordered',
        'three-d',
        'elevated',
        'link',
        'icon',
        'groups',
        'disabled',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export const Default = () => <Button variant="default">Default</Button>;

export const Sizes = () => (
  <div className="space-x-2">
    {(['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSize[]).map((size) => (
      <Button key={size} size={size} variant="default">
        {size.toUpperCase()}
      </Button>
    ))}
  </div>
);

export const WithIcon = {
  children: 'Download',
  icon: <ArrowDownTrayIcon />,
  iconPosition: 'right',
};

export const LoadingState = {
  children: 'Processing',
  loading: true,
};

export const DisabledState = {
  children: 'Disabled',
  disabled: true,
};

export const AsCustomLink = {
  children: 'View Documentation',
  href: 'https://example.com',
  target: '_blank',
  variant: 'link',
  icon: <ArrowUpRightIcon className="ml-2 h-4 w-4" />,
  iconPosition: 'right',
};

export const Comparison = () => (
  <div className="space-y-4">
    <div className="space-x-2">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="pill">Pill</Button>
      <Button variant="pill-outline">Pill Outline</Button>
    </div>
    <div className="space-x-2">
      <Button variant="three-d">3D Effect</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="link">CustomLink Style</Button>
      <Button variant="icon" icon={<ArrowDownIcon />}>
        Icon Button
      </Button>
    </div>
    <div className="space-x-2">
      <Button size="xs">Extra Small</Button>
      <Button size="lg">Large</Button>

      <Button disabled>Disabled</Button>
    </div>
    <div className="space-x-2">
      <Button variant="link">Internal CustomLink</Button>
      <Button
        variant="link"
        href="https://example.com"
        target="_blank"
        icon={<ArrowUpRightIcon />}
        iconPosition="right"
        underlineHover={true}
      >
        External CustomLink
      </Button>
    </div>
  </div>
);
