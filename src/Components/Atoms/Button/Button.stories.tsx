import React from 'react';
import Button from '.';
import { ButtonSize, ButtonRounded } from './ButtonProps.interface';
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
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
  },
};

const Template: any = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  variant: 'default',
};

export const Sizes = () => (
  <div className="space-x-2">
    {(['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSize[]).map((size) => (
      <Button key={size} size={size} variant="default">
        {size.toUpperCase()}
      </Button>
    ))}
  </div>
);

export const RoundedVariants = () => (
  <div className="space-x-2">
    {(['none', 'sm', 'md', 'lg', 'full'] as ButtonRounded[]).map((rounded) => (
      <Button key={rounded} rounded={rounded} variant="default">
        {rounded}
      </Button>
    ))}
  </div>
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Download',
  icon: <ArrowDownTrayIcon />,
  iconPosition: 'right',
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  children: 'Processing',
  loading: true,
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  children: 'Disabled',
  disabled: true,
};

export const AsCustomLink = Template.bind({});
AsCustomLink.args = {
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
      <Button rounded="full">Rounded Full</Button>
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
