import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactTemplate from '.';
import { ContactTemplateProps } from './ContactTemplateProps.interface';
import { formDataProps } from '@/Components/Organisms/ContactForm/ContactForm.interface';
import { TextAreaProps } from '@/Components/Atoms/InputGroup/TextArea/TextAreaProps.interface';

export default {
  title: 'Components/Templates/ContactTemplate',
  component: ContactTemplate,
} as Meta;

const Template: StoryFn<ContactTemplateProps> = (args) => (
  <ContactTemplate {...args} />
);

const ContactFormTempData = {
  formData: [
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
  contactInfo: {
    title: 'Contact Information',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    phone: '+1234567890',
    email: 'example@example.com',
    address: '123 Example Street, Example City, EX 12345',
  },
  textAreaData: [
    {
      id: 'message',
      name: 'message',
      label: 'Message',
      autoComplete: 'off',
      value: '',
      type: 'textarea',
      showIcon: false,
      placeholder: 'Enter your message',
      isRequired: true,
      requiredErrorMessage: 'Message is required',
      validationOnFocus: true,
    },
  ],
  submitButtonText: 'Submit',
  onSubmit: (data: {
    formData: formDataProps[];
    textAreaData: TextAreaProps[];
  }) => console.log('Submitted Data:', data),
};

export const DefaultContactTemplate = Template.bind({});
DefaultContactTemplate.args = {
  title: 'Contact Us',
  description:
    'Have any questions? We are here to help. Get in touch with us via the contact information below.',
  contactFormData: ContactFormTempData,
};
