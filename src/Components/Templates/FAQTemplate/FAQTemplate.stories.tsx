import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FAQTemplate from '.';
import { FAQTemplateProps } from './FAQTemplateProps.interface';

export default {
  title: 'Components/Templates/FAQTemplate',
  component: FAQTemplate,
} as Meta;

const Template: StoryFn<FAQTemplateProps> = (args) => <FAQTemplate {...args} />;

export const DefaultFAQTemplate = Template.bind({});
DefaultFAQTemplate.args = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to the most common questions below.',
  sidebarContent: (
    <ul>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          How to use the app?
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Account settings
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Subscription plans
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Troubleshooting
        </a>
      </li>
    </ul>
  ),
  children: (
    <div className="faq-main-content">
      <div className="faq-item">
        <h3 className="text-xl font-semibold text-gray-800">
          What is the app?
        </h3>
        <p className="mt-2 text-gray-600">
          This app helps you manage your tasks and projects more efficiently.
        </p>
      </div>
      <div className="faq-item mt-6">
        <h3 className="text-xl font-semibold text-gray-800">
          How do I reset my password?
        </h3>
        <p className="mt-2 text-gray-600">
          Click on the "Forgot Password" link on the login page to reset your
          password.
        </p>
      </div>
      {/* Add more FAQ items as necessary */}
    </div>
  ),
};
