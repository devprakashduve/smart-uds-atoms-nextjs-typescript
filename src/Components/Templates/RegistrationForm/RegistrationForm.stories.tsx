import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RegistrationForm from '.';
import Icon from '@/Components/Atoms/Icon';
import CustomLink from '@/Components/Atoms/CustomLink';

export default {
  title: 'Components/Templates/RegistrationForm',
  component: RegistrationForm,
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
} as Meta<typeof RegistrationForm>;

const Template: StoryFn<typeof RegistrationForm> = (args) => (
  <RegistrationForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageTitle: <Icon name={'user'} variant={'outline'} className="h-16" />,
  pageSubTitle: 'Please enter your registration details',
  formHandlerData: {
    inputFields: [
      {
        id: 'username',
        name: 'username',
        label: 'Username',
        type: 'text',
        value: '',
        size: 'lg',
        placeholder: 'Enter your username',
        isRequired: true,
        requiredErrorMessage: 'Username is required',
        showIcon: true,
        validationOnFocus: true,
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'email',
        value: '',
        size: 'lg',
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
        size: 'lg',
        placeholder: 'Enter your password',
        isRequired: true,
        requiredErrorMessage: 'Password is required',
        showIcon: true,
        validationOnFocus: true,
      },
      {
        id: 'confirmPassword',
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        value: '',
        size: 'lg',
        placeholder: 'Confirm your password',
        isRequired: true,
        requiredErrorMessage: 'Confirm Password is required',
        showIcon: true,
        validationOnFocus: true,
        disablePasswordHint: true,
      },
    ],
    checkboxFields: [
      {
        name: 'rememberMe',
        label: (
          <span>
            Agree with Term and condition
            <CustomLink target="_blank" href="/term-condition" underline={true}>
              Terms
            </CustomLink>
          </span>
        ),
        checked: false,
        onChange: function (checked: boolean): void {
          console.log(checked);
        },
      },
    ],
    selectFields: [
      {
        options: [
          { value: '', label: '' },
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ],
        label: 'Gender',
        defaultValue: '',
        size: 'lg',
        disabled: false,
        required: false,
        error: false,
        name: 'gender',
        type: 'select',
        placeholder: 'Select your gender',
      },
    ],
    btnText: 'Register',
    onSubmit: (data) => {
      console.log(data);
    },
    className: '',
  },
};
