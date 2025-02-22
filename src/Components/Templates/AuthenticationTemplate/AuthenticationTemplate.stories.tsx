import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AuthenticationTemplate from '.';
import { AuthenticationTemplateProps } from './AuthenticationTemplateProps.interface';

export default {
  title: 'Components/Templates/AuthenticationTemplate',
  component: AuthenticationTemplate,
} as Meta;

const Template: StoryFn<AuthenticationTemplateProps> = (args) => (
  <AuthenticationTemplate {...args} />
);

export const DefaultAuthenticationTemplate = Template.bind({});
DefaultAuthenticationTemplate.args = {
  title: 'Login to Your Account',
  description: 'Please enter your credentials to access your account.',
  children: (
    <>
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-md border border-gray-300 p-3"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-md border border-gray-300 p-3"
      />
      <button className="w-full rounded-md bg-blue-500 p-3 text-white">
        Login
      </button>
    </>
  ),
};
