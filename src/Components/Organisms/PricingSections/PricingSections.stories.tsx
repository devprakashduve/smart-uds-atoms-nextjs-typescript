import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PricingSections from '.';

export default {
  title: 'Components/Organisms/PricingSections',
  component: PricingSections,
} as Meta;

const Template: StoryFn = (args) => <PricingSections {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
