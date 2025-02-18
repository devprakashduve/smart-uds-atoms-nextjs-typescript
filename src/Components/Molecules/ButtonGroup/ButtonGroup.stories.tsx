import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonGroup from '.';
import { ButtonGroupProps } from './ButtonGroupProps.interface';

export default {
  title: 'Components/Molecules/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const DefaultButtonGroup = Template.bind({});
DefaultButtonGroup.args = {
  buttons: [
    {
      label: 'Primary',
      onClick: () => console.log('Primary Clicked'),
      variant: 'primary',
    },
    {
      label: 'Secondary',
      onClick: () => console.log('Secondary Clicked'),
      variant: 'secondary',
    },
    {
      label: 'Tertiary',
      onClick: () => console.log('Tertiary Clicked'),
      variant: 'tertiary',
    },
  ],
};

export const DisabledButtonGroup = Template.bind({});
DisabledButtonGroup.args = {
  buttons: [
    {
      label: 'Primary',
      onClick: () => console.log('Primary Clicked'),
      variant: 'primary',
      disabled: true,
    },
    {
      label: 'Secondary',
      onClick: () => console.log('Secondary Clicked'),
      variant: 'secondary',
      disabled: true,
    },
  ],
};
