import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GridsSection from '.';

export default {
  title: 'Components/Organisms/GridsSection',
  component: GridsSection,
} as Meta<typeof GridsSection>;

const Template: StoryFn = (args) => <GridsSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
