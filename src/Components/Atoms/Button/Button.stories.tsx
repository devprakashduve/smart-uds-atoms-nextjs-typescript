import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { ButtonSize, ButtonVariant } from './ButtonProps.interface';
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  ArrowDownTrayIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A versatile button component supporting multiple styles, sizes, states, and icons.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content displayed inside the button.',
    },
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
        // 'groups' might be better demonstrated in a specific context/story
        // 'disabled' is a state, better handled by the 'disabled' prop
      ] as ButtonVariant[],
      description: 'The visual style variant of the button.',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'null'] as ButtonSize[],
      description: 'The size of the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled.',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state (shows spinner).',
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler function.',
    },
    href: {
      control: 'text',
      description: 'If provided, the button renders as an anchor tag `<a>`.',
    },
    target: {
      control: 'text',
      description: 'Target attribute for the link (`_blank`, `_self`, etc.).',
    },
    rel: {
      control: 'text',
      description: 'Rel attribute for the link (e.g., `noopener noreferrer`).',
    },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute (for non-link buttons).',
    },
    icon: {
      control: 'object', // Control might be limited; use stories for specific icons
      description: 'Optional React element to be displayed as an icon.',
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to the children.',
    },
    ariaLabel: {
      control: 'text',
      description:
        'ARIA label for accessibility, especially important for icon-only buttons.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply.',
    },
    underlineHover: {
      control: 'boolean',
      description:
        'Whether to underline the button text on hover (useful for link variant).',
    },
  },
  args: {
    // Default args for controls
    children: 'Button Text',
    variant: 'default',
    size: 'md',
    disabled: false,
    loading: false,
    iconPosition: 'left',
    type: 'button',
    underlineHover: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- Basic Stories ---

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Pill: Story = {
  args: {
    children: 'Pill Button',
    variant: 'pill',
  },
};

export const PillOutline: Story = {
  args: {
    children: 'Pill Outline Button',
    variant: 'pill-outline',
  },
};

export const Bordered: Story = {
  args: {
    children: 'Bordered Button',
    variant: 'bordered',
  },
};

export const ThreeD: Story = {
  args: {
    children: '3D Button',
    variant: 'three-d',
  },
};

export const Elevated: Story = {
  args: {
    children: 'Elevated Button',
    variant: 'elevated',
  },
};

export const LinkStyled: Story = {
  args: {
    children: 'Link Styled Button',
    variant: 'link',
  },
};

// --- State Stories ---

export const Loading: Story = {
  args: {
    children: 'Processing...',
    loading: true,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Button in loading state. Spinner replaces icon or appears left.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Cannot Click',
    disabled: true,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: { story: 'Button in disabled state. Not interactive.' },
    },
  },
};

// --- Icon Stories ---

export const WithIconLeft: Story = {
  args: {
    children: 'Download',
    variant: 'default',
    icon: <ArrowDownTrayIcon className="h-5 w-5" />,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Upload',
    variant: 'outline',
    icon: <ArrowUpRightIcon className="h-5 w-5" />,
    iconPosition: 'right',
  },
};

export const IconOnly: Story = {
  args: {
    children: null, // No text
    variant: 'icon',
    icon: <PencilIcon className="h-5 w-5" />,
    ariaLabel: 'Edit Item', // Important for accessibility
  },
  parameters: {
    docs: {
      description: {
        story: 'Button containing only an icon. Requires `ariaLabel`.',
      },
    },
  },
};

export const LoadingWithIcon: Story = {
  args: {
    children: 'Saving',
    variant: 'default',
    icon: <ArrowDownTrayIcon className="h-5 w-5" />,
    iconPosition: 'left',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Loading state when an icon is present. Spinner replaces the icon.',
      },
    },
  },
};

// --- Size Stories ---

export const Sizes: Story = {
  parameters: {
    docs: {
      description: { story: 'Comparison of different button sizes.' },
    },
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSize[]).map((size) => (
        <Button
          {...args}
          key={size}
          size={size}
          variant={args.variant || 'default'}
        >
          {size.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
};

// --- Link Stories ---

export const AsLink: Story = {
  args: {
    children: 'Visit Docs',
    variant: 'link',
    href: '#', // Replace with actual link in real use
    icon: <ArrowUpRightIcon className="h-4 w-4" />,
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button rendered as an `<a>` tag using the `href` prop.',
      },
    },
  },
};

export const AsExternalLink: Story = {
  args: {
    children: 'Open Google',
    variant: 'default', // Can be any variant
    href: 'https://google.com',
    target: '_blank', // Opens in new tab
    icon: <ArrowUpRightIcon className="h-4 w-4" />,
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button rendered as an `<a>` tag opening in a new tab.',
      },
    },
  },
};

// --- Comparison Story ---

export const Comparison: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true }, // Hide warning as this story doesn't use args directly
    docs: {
      description: {
        story: 'A visual comparison of different button variants and states.',
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Standard Variants</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="pill">Pill</Button>
        <Button variant="pill-outline">Pill Outline</Button>
        <Button variant="bordered">Bordered</Button>
        <Button variant="link">Link</Button>
      </div>

      <h3 className="text-lg font-semibold">Effect Variants</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="three-d">3D Effect</Button>
        <Button variant="elevated">Elevated</Button>
      </div>

      <h3 className="text-lg font-semibold">States</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="default" loading>
          Loading
        </Button>
        <Button
          variant="outline"
          loading
          icon={<ArrowDownIcon className="h-5 w-5" />}
        >
          Loading Icon
        </Button>
        <Button variant="default" disabled>
          Disabled
        </Button>
        <Button variant="link" disabled>
          Disabled Link
        </Button>
      </div>

      <h3 className="text-lg font-semibold">Icons</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="default"
          icon={<ArrowDownTrayIcon className="h-5 w-5" />}
        >
          Icon Left
        </Button>
        <Button
          variant="outline"
          icon={<ArrowUpRightIcon className="h-5 w-5" />}
          iconPosition="right"
        >
          Icon Right
        </Button>
        <Button
          variant="icon"
          icon={<PencilIcon className="h-5 w-5" />}
          ariaLabel="Edit"
        />
      </div>

      <h3 className="text-lg font-semibold">Sizes (Default Variant)</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button size="md">MD</Button>
        <Button size="lg">LG</Button>
        <Button size="xl">XL</Button>
      </div>
    </div>
  ),
};
