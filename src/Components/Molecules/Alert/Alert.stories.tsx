import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Alert from '.';
import { AlertProps } from './AlertProps.interface';

export default {
  title: 'Components/Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  type: 'success',
  message: 'This is a success message!',
  dismissible: true,
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  type: 'error',
  message: 'This is an error message!',
  dismissible: true,
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  type: 'warning',
  message: 'This is a warning message!',
  dismissible: true,
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  type: 'info',
  message: 'This is an informational message!',
  dismissible: true,
};
