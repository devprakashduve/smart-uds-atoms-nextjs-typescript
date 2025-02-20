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
  testimonialText:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSource: '/images/avatar.jpg',
  userName: 'Dubey Dev',
  userPosition: 'CEO, Example Corp',
  cardDesign: 'default',
};

export const CenterAligned = Template.bind({});
CenterAligned.args = {
  testimonialText:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSource: '/images/avatar.jpg',
  userName: 'Dubey Dev',
  userPosition: 'CEO, Example Corp',
  textAlignment: 'center',
  cardDesign: 'default',
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  testimonialText:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSource: '/images/avatar.jpg',
  userName: 'Dubey Dev',
  userPosition: 'CEO, Example Corp',
  textAlignment: 'left',
  cardDesign: 'default',
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  testimonialText:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSource: '/images/avatar.jpg',
  userName: 'Dubey Dev',
  userPosition: 'CEO, Example Corp',
  textAlignment: 'right',
  cardDesign: 'default',
};

export const InlineDesign = Template.bind({});
InlineDesign.args = {
  testimonialText:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSource: '/images/avatar.jpg',
  userName: 'Dubey Dev',
  userPosition: 'CEO, Example Corp',
  cardDesign: 'inline',
};

export const InlineLeftAligned = Template.bind({});
InlineLeftAligned.args = {
  testimonialText:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSource: '/images/avatar.jpg',
  userName: 'Dubey Dev',
  userPosition: 'CEO, Example Corp',
  textAlignment: 'left',
  cardDesign: 'inline',
};

export const InlineRightAligned = Template.bind({});
InlineRightAligned.args = {
  testimonialText:
    'This service has completely transformed the way I work. Highly recommended!',
  imageSource: '/images/avatar.jpg',
  userName: 'Dubey Dev',
  userPosition: 'CEO, Example Corp',
  textAlignment: 'right',
  cardDesign: 'inline',
};
