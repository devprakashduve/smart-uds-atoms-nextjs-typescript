import Tooltip from '.';
import Button from '../Button';
import Paragraph from '../Paragraph';

export default {
  title: 'Components/Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export const DefaultTooltip = {
  args: {
    children: <Button disabled={false}>Touch Me</Button>,
    content: 'This is a top tooltip',
  },
};

export const Comparison = () => (
  <div className="flex flex-col gap-8 p-8">
    <Paragraph>Tooltip Variants Comparison</Paragraph>

    <div className="flex flex-wrap items-start gap-6">
      {/* Default */}
      <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
        <Paragraph>Default Tooltip</Paragraph>
        <Tooltip content="Basic tooltip without styling">
          <Button>Hover Default</Button>
        </Tooltip>
      </div>

      {/* With Background */}
      <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
        <Paragraph>With Background</Paragraph>
        <Tooltip content="With background color" isBackground>
          <Button>Hover Background</Button>
        </Tooltip>
      </div>

      {/* Rounded */}
      <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
        <Paragraph>Rounded Corners</Paragraph>
        <Tooltip content="Rounded edges tooltip" isRounded>
          <Button>Hover Rounded</Button>
        </Tooltip>
      </div>

      {/* Custom Background */}
      <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
        <Paragraph>Custom Background</Paragraph>
        <Tooltip content="Custom background color" isBackground>
          <Button>Hover Custom</Button>
        </Tooltip>
      </div>

      {/* With Border */}
      <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
        <Paragraph>With Border</Paragraph>
        <Tooltip content="Border without background" isRounded>
          <Button>Hover Border</Button>
        </Tooltip>
      </div>
    </div>
  </div>
);
export const Rounded = {
  args: {
    children: 'Hover me',
    content: 'This is a top tooltip',
    isRounded: true,
  },
};

export const Background = {
  args: {
    children: <Button>Touch Me</Button>,
    content: 'This is a right tooltip',
    isBackground: true,
  },
};

export const setBackground = {
  args: {
    children: <Button>touch Me</Button>,
    content: 'This is a bottom tooltip',
    isBackground: true,
    setBackground: 'bg-secondary-dark',
  },
};

export const ComparisonDefaultRounded = {
  args: {
    children: 'Hover me',
    content: 'This is a top tooltip',
    isRounded: true,
  },
};

export const ComparisonDefaultBackground = {
  args: {
    children: <Button>Touch Me</Button>,
    content: 'This is a right tooltip',
    isBackground: true,
  },
};

export const ComparisonRoundedBackground = {
  args: {
    children: <Button>Touch Me</Button>,
    content: 'This is a bottom tooltip',
    isRounded: true,
    isBackground: true,
  },
};
