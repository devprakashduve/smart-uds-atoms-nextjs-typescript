import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TestimonialCard from '.';

export default {
  title: 'Components/Molecules/CardsGroup/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof TestimonialCard> = (args) => (
  <TestimonialCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  testimonial:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSrc: '/images/avatar.jpg',
  name: 'Dubey Dev',
  position: 'CEO, Example Corp',
  design: 'default',
};

export const CenterAligned = Template.bind({});
CenterAligned.args = {
  testimonial:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSrc: '/images/avatar.jpg',
  name: 'Dubey Dev',
  position: 'CEO, Example Corp',
  alignment: 'center',
  design: 'default',
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  testimonial:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSrc: '/images/avatar.jpg',
  name: 'Dubey Dev',
  position: 'CEO, Example Corp',
  alignment: 'left',
  design: 'default',
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  testimonial:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSrc: '/images/avatar.jpg',
  name: 'Dubey Dev',
  position: 'CEO, Example Corp',
  alignment: 'right',
  design: 'default',
};

export const InlineDesign = Template.bind({});
InlineDesign.args = {
  testimonial:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSrc: '/images/avatar.jpg',
  name: 'Dubey Dev',
  position: 'CEO, Example Corp',
  design: 'inline',
};

export const InlineLeftAligned = Template.bind({});
InlineLeftAligned.args = {
  testimonial:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSrc: '/images/avatar.jpg',
  name: 'Dubey Dev',
  position: 'CEO, Example Corp',
  alignment: 'left',
  design: 'inline',
};

export const InlineRightAligned = Template.bind({});
InlineRightAligned.args = {
  testimonial:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSrc: '/images/avatar.jpg',
  name: 'Dubey Dev',
  position: 'CEO, Example Corp',
  alignment: 'right',
  design: 'inline',
};
