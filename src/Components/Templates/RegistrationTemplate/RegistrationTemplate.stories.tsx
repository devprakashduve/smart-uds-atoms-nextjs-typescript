import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RegistrationTemplate from './index';
import { InputFieldProps } from './RegistrationTemplate.interface';

export default {
  title: 'Templates/RegistrationTemplate',
  component: RegistrationTemplate,
} as Meta<typeof RegistrationTemplate>;

const Template: StoryFn<typeof RegistrationTemplate> = (args) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputFields: InputFieldProps[] = [
    {
      id: 'username',
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      value: username,
      onChange: setUsername,
      isRequired: true,
      requiredErrorMessage: 'Username is required',
      validationOnFocus: true,
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      value: email,
      onChange: setEmail,
      isRequired: true,
      requiredErrorMessage: 'Email is required',
      validationOnFocus: true,
    },
    {
      id: 'password',
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      value: password,
      onChange: setPassword,
      isRequired: true,
      requiredErrorMessage: 'Password is required',
      validationOnFocus: true,
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm your password',
      value: confirmPassword,
      onChange: setConfirmPassword,
      isRequired: true,
      requiredErrorMessage: 'Confirm Password is required',
      disablePasswordHint: true,
      validationOnFocus: true,
    },
  ];

  return <RegistrationTemplate {...args} inputFields={inputFields} />;
};

export const Default = Template.bind({});
Default.args = {
  error: '',
  setError: () => {},
  handleSubmit: () => {},
  title: 'Register',
  registerButtonText: 'Register',
  registerButtonChild: null,
};
