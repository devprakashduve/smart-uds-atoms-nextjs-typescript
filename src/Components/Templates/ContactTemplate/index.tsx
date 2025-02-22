import React from 'react';
import { ContactTemplateProps } from './ContactTemplateProps.interface';

const ContactTemplate: React.FC<ContactTemplateProps> = ({
  title,
  description,
  contactInfo,
  children,
}) => {
  return (
    <div className="px-6 py-12">
      <div className="container mx-auto max-w-7xl rounded-lg p-8">
        <header className="mb-8 text-center">
          <h1>{title}</h1>
          <p className="mt-4 text-lg">{description}</p>
        </header>

        <section className="mt-8">
          <h2 className="text-left">Contact Information</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>
              <strong>Phone:</strong> {contactInfo.phone}
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <strong>Address:</strong> {contactInfo.address}
            </li>
          </ul>
        </section>

        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export default ContactTemplate;
