import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactForm from '.';
import { ContactFormProps } from './ContactForm.interface';

export default {
  title: 'Components/Templates/ContactForm',
  component: ContactForm,
} as Meta;

const Template: StoryFn<ContactFormProps> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageTitle: 'Let’s Make Something Great Together!',
  pageSubTitle: 'Let’s Connect – Drop Us a Message',
  formHandlerData: {
    inputFields: [
      {
        id: 'first-name',
        name: 'first-name',
        label: 'First name',
        autoComplete: 'given-name',
        value: '',
        type: 'text',
        showIcon: true,
        placeholder: 'Enter your first name',
        isRequired: true,
        requiredErrorMessage: 'First name is required',
        validationOnFocus: true,
      },
      {
        id: 'last-name',
        name: 'last-name',
        label: 'Last name',
        autoComplete: 'family-name',
        value: '',
        type: 'text',
        showIcon: true,
        placeholder: 'Enter your last name',
        isRequired: true,
        requiredErrorMessage: 'Last name is required',
        validationOnFocus: true,
      },
      {
        id: 'company',
        name: 'company',
        label: 'Company',
        autoComplete: 'organization',
        value: '',
        type: 'text',
        showIcon: true,
        placeholder: 'Enter your company name',
        isRequired: true,
        requiredErrorMessage: 'Company name is required',
        validationOnFocus: true,
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        autoComplete: 'email',
        value: '',
        type: 'email',
        showIcon: true,
        placeholder: 'Enter your email address',
        isRequired: true,
        requiredErrorMessage: 'Email is required',
        validationOnFocus: true,
      },
      {
        id: 'phone',
        name: 'phone',
        label: 'Phone',
        autoComplete: 'phone',
        value: '',
        type: 'phone',
        showIcon: true,
        placeholder: 'Enter your phone number',
        isRequired: true,
        requiredErrorMessage: 'Phone number is required',
        validationOnFocus: true,
      },
    ],
    textAreaFields: [
      {
        id: 'message',
        name: 'message',
        value: '',
        placeholder: 'Enter your text here...',
        charCountWarningThreshold: 10,
        maxLength: 100,
        showCharCount: true,
        label: 'Message',
        isRequired: true,
        requiredErrorMessage: 'Message is required',
        validationOnFocus: true,
      },
    ],
    btnText: 'Submit',
    onSubmit: (data) => console.log('Submitted Data:', data),
    className: 'gap-8',
  },
  contactInfo: {
    title: 'Contact details',
    email: {
      emailLabel: 'Email',
      emailAddress: 'contact@example.com',
    },
    phone: {
      phoneLabel: 'Phone',
      phoneNumber: '123-456-7890',
    },
    address: {
      addressLabel: 'Address',
      AddressDetails: '123 Main St, Anytown, USA',
    },
  },
};
