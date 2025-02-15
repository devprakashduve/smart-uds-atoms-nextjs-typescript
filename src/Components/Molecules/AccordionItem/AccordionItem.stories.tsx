import Icon from '@/Components/Atoms/Icon';
import AccordionItem from '.';

export default {
  title: 'Components/Molecules/AccordionItem',
  component: AccordionItem,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the accordion item',
    },
    content: {
      control: 'text',
      description: 'The content of the accordion item',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the accordion item is initially open',
    },
    isRounded: {
      control: 'boolean',
      description: 'Whether the accordion style is rounded',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the accordion item is disabled',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled'],
      description: 'The variant style of the accordion item',
    },
    icon: {
      control: 'text',
      description: 'The icon to display in the accordion header',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback function when the accordion item is toggled',
    },
  },
};

export const DefaultAccordionItem = {
  args: {
    title: 'Default Accordion Item',
    content: 'This is the content of the default accordion item.',
    isOpen: false,
    disabled: false,
    variant: 'default',
    icon: <Icon name="plus" />,
    isRounded: false,
  },
};

export const FilledAccordionItem = {
  args: {
    title: 'Filled Accordion Item',
    content: 'This is the content of the filled accordion item.',
    isOpen: false,
    disabled: false,
    variant: 'filled',
    icon: <Icon name="plus" className="h-3 font-extrabold" />,
    isRounded: true,
  },
};

export const OpenAccordionItem = {
  args: {
    title: 'Open Accordion Item',
    content: 'This accordion item is initially open.',
    isOpen: true,
    disabled: false,
    variant: 'default',
    icon: 'v',
  },
};

export const DisabledAccordionItem = {
  args: {
    title: 'Disabled Accordion Item',
    content: 'This accordion item is disabled.',
    isOpen: false,
    disabled: true,
    variant: 'default',
    icon: <Icon name="close" />,
  },
};
