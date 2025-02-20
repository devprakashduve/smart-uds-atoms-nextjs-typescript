import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion from '.';
import { AccordionProps } from './AccordionProps.interface';
import Icon from '@/Components/Atoms/Icon';

export default {
  title: 'Components/Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'accordion item size',
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
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  icon: <Icon name={'chevronDown'} variant={'outline'} />,
  items: [
    {
      title: 'Accordion Item 1',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title: 'Accordion Item 2',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title: 'Accordion Item 3',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ],
  size: 'md',
};

export const RoundedAccordion = Template.bind({});
RoundedAccordion.args = {
  icon: <Icon name={'chevronDown'} variant={'outline'} />,
  items: [
    { title: 'Accordion Item 1', content: 'Content for the first item.' },
    { title: 'Accordion Item 2', content: 'Content for the second item.' },
    { title: 'Accordion Item 3', content: 'Content for the third item.' },
  ],
  size: 'lg',
  isRounded: true,
};
export const OpenAccordionItem = Template.bind({});
OpenAccordionItem.args = {
  icon: '+',
  items: [
    {
      title: 'Accordion Item 1',
      content: 'Content for the first item.',
      isOpen: true,
    },
    { title: 'Accordion Item 2', content: 'Content for the second item.' },
  ],
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  items: [
    { title: 'Accordion Item 1', content: '' },
    { title: 'Accordion Item 2', content: '' },
    { title: 'Accordion Item 3', content: '' },
  ],
};
