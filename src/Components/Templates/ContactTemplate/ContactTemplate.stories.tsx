import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactTemplate from '.';
import { ContactTemplateProps } from './ContactTemplateProps.interface';
import ContactForm from '@/Components/Organisms/ContactForm';
import { formDataProps } from '@/Components/Organisms/ContactForm/ContactForm.interface';

export default {
  title: 'Components/Templates/ContactTemplate',
  component: ContactTemplate,
} as Meta;

const Template: StoryFn<ContactTemplateProps> = (args) => (
  <ContactTemplate {...args} />
);

const formData = {
  headerTitle: 'Contact sales',
  headerDescription:
    'Aute magna irure deserunt veniam aliqua magna enim voluptate. this i test',
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
  submitButtonText: 'Submit',
  onSubmit: (data: any) => console.log('Submitted Data:', data),
};

export const DefaultContactTemplate = Template.bind({});
DefaultContactTemplate.args = {
  title: 'Contact Us',
  description:
    'Have any questions? We are here to help. Get in touch with us via the contact information below.',
  contactInfo: {
    phone: '123-456-7890',
    email: 'contact@company.com',
    address: '123 Main St, City, Country',
  },
  children: (
    <div className="contact-form">
      <ContactForm {...formData} />
    </div>
  ),
};
