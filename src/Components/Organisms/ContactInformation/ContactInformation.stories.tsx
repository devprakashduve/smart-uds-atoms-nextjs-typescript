import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactInformation from './index';
import { ContactInformationProps } from './types';

export default {
  title: 'Components/Organisms/ContactInformation',
  component: ContactInformation,
} as Meta;

const Template: StoryFn<ContactInformationProps> = (args) => (
  <ContactInformation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Contact Information',
  phone: { phoneLabel: 'Phone', phoneNumber: '+1234567890' },
  email: { emailLabel: 'Email', emailAddress: 'example@example.com' },
  address: {
    addressLabel: 'Address',
    AddressDetails: '123 Example Street, Example City, EX 12345',
  },
};
