import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContactTemplate from '.';
import { ContactTemplateProps } from './ContactTemplateProps.interface';

export default {
  title: 'Components/Templates/ContactTemplate',
  component: ContactTemplate,
} as Meta;

const Template: StoryFn<ContactTemplateProps> = (args) => (
  <ContactTemplate {...args} />
);

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
      <h3 className="text-xl font-semibold text-gray-800">Send Us a Message</h3>
      <form className="mt-4 space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-lg text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-lg text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-lg text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="w-full rounded-lg border border-gray-300 p-3"
            rows={4}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  ),
};
