import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PromoSections from '.';

export default {
  title: 'Components/Organisms/PromoSections',
  component: PromoSections,
} as Meta;

const Template: StoryFn = (args) => <PromoSections {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  // Add custom props here
};
