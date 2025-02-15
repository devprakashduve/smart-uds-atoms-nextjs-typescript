import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FeatureSections from '.';
import FeatureSectionsProps from './FeatureSections.interface';

export default {
  title: 'Components/Organisms/FeatureSections',
  component: FeatureSections,
} as Meta;

const Template: StoryFn<FeatureSectionsProps> = (args) => (
  <FeatureSections {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  // Add custom props here
};
