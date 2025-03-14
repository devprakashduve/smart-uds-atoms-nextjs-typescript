import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Section from '.';
import { SectionProps } from './Section.interface';

export default {
  title: 'Components/Organisms/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    border: { control: 'boolean' },
    heading: { control: 'text' },
    subheading: { control: 'text' },
  },
  textAlign: {
    control: 'select',
    options: ['left', 'center', 'right'],
  },
} as Meta;

const Template: StoryFn<SectionProps> = (args) => (
  <Section {...args}>
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded-lg border border-gray-300 p-6">
        <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
          Sample Card 1
        </h2>
        <p className="text-base leading-relaxed">
          This is a sample description inside a card.
        </p>
      </div>
    </div>
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded-lg border border-gray-300 p-6">
        <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
          Sample Card 2
        </h2>
        <p className="text-base leading-relaxed">
          This is a sample description inside a card.
        </p>
      </div>
    </div>
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded-lg border border-gray-300 p-6">
        <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
          Sample Card 3
        </h2>
        <p className="text-base leading-relaxed">
          This is a sample description inside a card.
        </p>
      </div>
    </div>
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded-lg border border-gray-300 p-6">
        <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
          Sample Card 4
        </h2>
        <p className="text-base leading-relaxed">
          This is a sample description inside a card.
        </p>
      </div>
    </div>
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Dynamic Section Title',
  subheading: 'This is a dynamically generated section with reusable content.',
  border: true,

  className: 'bg-gradient-to-t from-yellow-100 via-lime-100 to-yellow-100',
};
