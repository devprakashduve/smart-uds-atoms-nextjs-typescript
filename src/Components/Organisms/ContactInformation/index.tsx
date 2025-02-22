import React from 'react';
import { ContactInformationProps } from './types';

const ContactInformation: React.FC<ContactInformationProps> = ({
  title,
  phoneLabel,
  emailLabel,
  addressLabel,
  phone,
  email,
  address,
}) => {
  return (
    <section className="my-8">
      {title && <h2 className="text-left">{title}</h2>}
      <ul className="mt-4 space-y-2 text-lg">
        {phone && (
          <li>
            <strong>{phoneLabel}:</strong> {phone}
          </li>
        )}

        {email && (
          <li>
            <strong>{emailLabel}:</strong>
            <a target="_blank" href={`mailto:${email}`}>
              {email}
            </a>
          </li>
        )}

        {address && (
          <li>
            <strong>{addressLabel}:</strong> {address}
          </li>
        )}
      </ul>
    </section>
  );
};

export default ContactInformation;
