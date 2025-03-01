import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FormHandler from '.';
import { FormHandlerProps } from './FormHandler.interface';

export default {
  title: 'Components/Organisms/FormHandler',
  component: FormHandler,
  tags: ['autodocs'],
  argTypes: {
    inputFields: { control: 'object' },
    textAreaFields: { control: 'object' },
    checkboxFields: { control: 'object' },
    fieldOrder: { control: 'object' },
    btnText: { control: 'text' },
    onSubmit: { action: 'submitted' },
  },
} as Meta<typeof FormHandler>;

const Template: StoryFn<typeof FormHandler> = (args: FormHandlerProps) => (
  <FormHandler {...args} />
);

export const Default = Template.bind({});
Default.args = {
  inputFields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      isRequired: true,
      requiredErrorMessage: 'Email is required',
      value: '',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      isRequired: true,
      requiredErrorMessage: 'Password is required',
      value: '',
    },
  ],
  textAreaFields: [
    {
      name: 'message',
      label: 'Message',
      placeholder: 'Enter your message',
      isRequired: true,
      requiredErrorMessage: 'Message is required',
    },
  ],
  checkboxFields: [
    {
      name: 'rememberMe',
      label: 'Remember Me',
      checked: false,
      onChange: function (checked: boolean): void {
        console.log(checked);
      },
    },
  ],
  fieldOrder: ['input', 'textarea', 'checkbox'],
  btnText: 'Submit',
  validationOnFocus: true,
  onSubmit: (data) => {
    console.log('Form submitted:', data);
  },
};
