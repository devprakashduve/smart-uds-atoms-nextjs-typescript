import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormLayouts from '.';

export default {
  title: 'Components/Organisms/FormLayouts',
  component: FormLayouts,
} as Meta;

const Template: StoryFn = (args) => <FormLayouts {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
