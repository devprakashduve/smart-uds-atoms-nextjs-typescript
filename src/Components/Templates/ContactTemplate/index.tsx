import React from 'react';
import { ContactTemplateProps } from './ContactTemplateProps.interface';
import './ContactTemplate.css';

const ContactTemplate: React.FC<ContactTemplateProps> = ({
  title,
  description,
  contactInfo,
  children,
}) => {
  return (
    <div className="contact-template bg-gray-50 px-6 py-12">
      <div className="container mx-auto max-w-7xl rounded-lg bg-white p-8 shadow-lg">
        <header className="contact-header mb-8 text-center">
          <h1 className="contact-title text-3xl font-semibold text-gray-800">
            {title}
          </h1>
          <p className="contact-description mt-4 text-lg text-gray-600">
            {description}
          </p>
        </header>

        <section className="contact-info mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h2>
          <ul className="mt-4 space-y-2 text-lg text-gray-600">
            <li>
              <strong>Phone:</strong> {contactInfo.phone}
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contactInfo.email}`} className="text-blue-600">
                {contactInfo.email}
              </a>
            </li>
            <li>
              <strong>Address:</strong> {contactInfo.address}
            </li>
          </ul>
        </section>

        <div className="contact-form mt-8">{children}</div>
      </div>
    </div>
  );
};

export default ContactTemplate;
