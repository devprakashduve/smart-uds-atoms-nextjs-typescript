import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactPage from '.';
import { ContactPageProps } from './ContactPage.interface';

export default {
  title: 'Components/Pages/ContactPage',
  component: ContactPage,
} as Meta;

const Template: StoryFn<ContactPageProps> = (args) => <ContactPage {...args} />;

export const Default = Template.bind({});
Default.args = {
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
    },
    {
      id: 'last-name',
      name: 'last-name',
      label: 'Last name',
      autoComplete: 'family-name',
      value: '',
      type: 'text',
      showIcon: true,
    },
    {
      id: 'company',
      name: 'company',
      label: 'Company',
      autoComplete: 'organization',
      value: '',
      type: 'text',
      showIcon: true,
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      autoComplete: 'email',
      value: '',
      type: 'email',
      showIcon: true,
    },
    {
      id: 'phone',
      name: 'phone',
      label: 'Phone',
      autoComplete: 'phone',
      value: '',
      type: 'phone',
      showIcon: true,
    },
  ],
  submitButtonText: 'Submit',
};
