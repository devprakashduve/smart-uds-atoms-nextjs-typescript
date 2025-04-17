import React from 'react';
import { ContactFormProps } from './ContactForm.interface';
import PageTemplate from '../PageTemplate';
import FormHandler from '../../Organisms/FormHandler';
import ContactInformation from '../../Organisms/ContactInformation';

export const ContactForm: React.FC<ContactFormProps> = ({
  pageTitle,
  pageSubTitle,
  formHandlerData,
  contactInfo,
  header,
  footer,
  sectionBorder,
  sectionClassName,
  sectionTextAlign,
}) => {
  return (
    <PageTemplate
      header={header}
      footer={footer}
      pageTitle={pageTitle}
      pageSubTitle={pageSubTitle}
      className="bg-gray-50"
      sectionBorder={sectionBorder}
      sectionClassName={sectionClassName}
      sectionTextAlign={sectionTextAlign}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <FormHandler {...formHandlerData} />
        {contactInfo && (
          <ContactInformation {...contactInfo} />
        )}
      </div>
    </PageTemplate>
  );
};

export default ContactForm; 