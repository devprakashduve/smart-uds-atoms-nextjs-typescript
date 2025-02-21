import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ToastNotification from '.';
import { ToastNotificationProps } from './ToastNotificationProps.interface';

export default {
  title: 'Components/Molecules/ToastNotification',
  component: ToastNotification,
} as Meta;

const Template: StoryFn<ToastNotificationProps> = (args) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <ToastNotification {...args} onClose={() => setIsVisible(false)} />
      )}
    </>
  );
};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  message: 'This is a success message!',
  type: 'success',
  duration: 3000,
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  message: 'This is an error message!',
  type: 'error',
  duration: 3000,
};

export const InfoToast = Template.bind({});
InfoToast.args = {
  message: 'This is an informational message!',
  type: 'info',
  duration: 3000,
};

export const WarningToast = Template.bind({});
WarningToast.args = {
  message: 'This is a warning message!',
  type: 'warning',
  duration: 3000,
};
