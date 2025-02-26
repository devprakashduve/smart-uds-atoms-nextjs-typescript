import React from 'react';
import { ContactTemplateProps } from './ContactTemplateProps.interface';
import ContactForm from '@/Components/Organisms/ContactForm';

const ContactTemplate: React.FC<ContactTemplateProps> = ({
  title,
  description,
  contactFormData,
}) => {
  return (
    <div className="px-6 py-12">
      <div className="container mx-auto max-w-7xl rounded-lg p-8">
        <header className="mb-8 text-center">
          <h1>{title}</h1>
          <p>{description}</p>
        </header>

        <div className="mt-8">
          <ContactForm {...contactFormData} />
        </div>
      </div>
    </div>
  );
};

export default ContactTemplate;
