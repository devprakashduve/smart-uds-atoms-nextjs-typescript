import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LoginTemplate from '.';

export default {
  title: 'Components/Templates/LoginTemplate',
  component: LoginTemplate,
  tags: ['autodocs'],
  argTypes: {
    email: {
      control: 'text',
      description: 'Email value',
    },
    password: {
      control: 'text',
      description: 'Password',
    },
    emailPlaceholder: {
      control: 'text',
      description: 'Email placeholder',
    },
    passwordPlaceholder: {
      control: 'text',
      description: 'Password placeholder',
    },
    emailRequiredErrorMessage: {
      control: 'text',
      description: 'Email required error message',
    },
    passwordRequiredErrorMessage: {
      control: 'text',
      description: 'Password required error message',
    },
    emailId: {
      control: 'text',
      description: 'Email id',
    },
    emailName: {
      control: 'text',
      description: 'Email name',
    },
    emailLabel: {
      control: 'text',
      description: 'Email label',
    },
    emailType: {
      control: 'text',
      description: 'Email type',
    },
    passwordId: {
      control: 'text',
      description: 'Password id',
    },
    passwordName: {
      control: 'text',
      description: 'Password name',
    },
    passwordLabel: {
      control: 'text',
      description: 'Password label',
    },
    passwordType: {
      control: 'text',
      description: 'Password type',
    },
    buttonChild: {
      control: 'text',
      description: 'Button child',
    },
  },
} as Meta<typeof LoginTemplate>;

const Template: StoryFn<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Login',
  email: '',
  password: '',
  onSubmit: (data) => {
    console.log('Form submitted:', data);
  },
  emailPlaceholder: 'Enter your email',
  passwordPlaceholder: 'Enter your password',
  emailRequiredErrorMessage: 'Email is required',
  passwordRequiredErrorMessage: 'Password is required!!',
  emailId: 'email',
  emailName: 'email',
  emailLabel: 'Email',
  emailType: 'email',
  passwordId: 'password',
  passwordName: 'password',
  passwordLabel: 'Password',
  passwordType: 'password',
  buttonChild: 'Login',
};
