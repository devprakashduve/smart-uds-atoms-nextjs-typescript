import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion from '.';
import { AccordionProps } from './AccordionProps.interface';

export default {
  title: 'Components/Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  icon: '+',
  items: [
    { title: 'Accordion Item 1', content: 'Content for the first item.' },
    { title: 'Accordion Item 2', content: 'Content for the second item.' },
    { title: 'Accordion Item 3', content: 'Content for the third item.' },
  ],
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
