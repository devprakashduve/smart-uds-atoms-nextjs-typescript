import Typography from '.';

export default {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content for the typography component',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'heading',
        'subheading',
        'body',
        'caption',
        'overline',
        'button',
      ],
    },
    size: {
      control: { type: 'select' },
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
      ],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'bold', 'black'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary-light',
        'primary',
        'primary-dark',
        'secondary-light',
        'secondary',
        'secondary-dark',
        'accent-light',
        'accent',
        'accent-dark',
        'error',
        'warning',
        'info',
        'success',
        'neutral',
      ],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export const Default = {
  args: {
    children: 'Default body text with normal weight',
    variant: 'body',
    size: 'base',
    weight: 'normal',
    color: 'neutral',
    align: 'left',
  },
};

export const AllVariants = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="heading">Heading Text (2xl bold)</Typography>
      <Typography variant="subheading">Subheading Text (xl medium)</Typography>
      <Typography variant="body">Body Text (base normal)</Typography>
      <Typography variant="caption">Caption Text (sm light)</Typography>
      <Typography variant="overline">Overline Text (xs uppercase)</Typography>
      <Typography variant="button">Button Text (lg bold uppercase)</Typography>
    </div>
  ),
};

export const HeadingVariations = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="heading" size="4xl">
        Main Heading (4xl)
      </Typography>
      <Typography variant="heading" size="3xl">
        Section Heading (3xl)
      </Typography>
      <Typography variant="heading" size="2xl">
        Subsection Heading (2xl)
      </Typography>
    </div>
  ),
};

export const TextWeights = {
  render: () => (
    <div className="space-y-2">
      <Typography weight="light">Light Weight Text</Typography>
      <Typography weight="normal">Normal Weight Text</Typography>
      <Typography weight="medium">Medium Weight Text</Typography>
      <Typography weight="bold">Bold Weight Text</Typography>
      <Typography weight="black">Black Weight Text</Typography>
    </div>
  ),
};

export const TextAlignments = {
  render: () => (
    <div className="space-y-4">
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
    </div>
  ),
};

export const ColorPalette = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Typography color="primary">Primary Text</Typography>
        <Typography color="primary-light">Primary Light</Typography>
        <Typography color="primary-dark">Primary Dark</Typography>
      </div>

      <div className="space-y-2">
        <Typography color="secondary">Secondary Text</Typography>
        <Typography color="secondary-light">Secondary Light</Typography>
        <Typography color="secondary-dark">Secondary Dark</Typography>
      </div>

      <div className="space-y-2">
        <Typography color="accent">Accent Text</Typography>
        <Typography color="accent-light">Accent Light</Typography>
        <Typography color="accent-dark">Accent Dark</Typography>
      </div>

      <div className="space-y-2">
        <Typography color="error">Error Text</Typography>
        <Typography color="warning">Warning Text</Typography>
        <Typography color="success">Success Text</Typography>
        <Typography color="info">Info Text</Typography>
        <Typography color="neutral">Neutral Text</Typography>
      </div>
    </div>
  ),
};

export const ResponsiveSizes = {
  render: () => (
    <div className="space-y-2">
      {[
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
      ].map((size: any) => (
        <Typography key={size} size={size}>
          {size.toUpperCase()} Text Size
        </Typography>
      ))}
    </div>
  ),
};

export const InteractiveExample = {
  args: {
    children: 'Edit me using Storybook controls!',
    variant: 'body',
    size: 'base',
    weight: 'normal',
    color: 'neutral',
    align: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example - use Storybook controls to modify props',
      },
    },
  },
};

export const DarkModeExample = {
  render: () => (
    <div className="dark bg-gray-900 p-4">
      <Typography color="primary-light">Primary Light in Dark Mode</Typography>
      <Typography color="secondary">Secondary in Dark Mode</Typography>
      <Typography color="accent">Accent in Dark Mode</Typography>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
