import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LoginForm from '.';
import Icon from '@/Components/Atoms/Icon';

export default {
  title: 'Components/Templates/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    pageTitle: {
      control: 'text',
      description: 'Page title',
    },
    pageSubTitle: {
      control: 'text',
      description: 'Page subtitle',
    },
    formHandlerData: {
      control: 'object',
      description: 'Form handler data',
    },
  },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageTitle: <Icon name={'user'} variant={'outline'} className="h-16" />,
  pageSubTitle: 'Please enter your credentials',
  formHandlerData: {
    inputFields: [
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'email',
        value: '',
        placeholder: 'Enter your email',
        isRequired: true,
        requiredErrorMessage: 'Email is required',
        showIcon: true,
        validationOnFocus: true,
      },
      {
        id: 'password',
        name: 'password',
        label: 'Password',
        type: 'password',
        value: '',
        placeholder: 'Enter your password',
        isRequired: true,
        requiredErrorMessage: 'Password is required!!',
        showIcon: true,
        validationOnFocus: true,
      },
    ],
    btnText: 'Login',
    onSubmit: (data) => {
      console.log('Form submitted:', data);
    },
    className: '',
  },
};
