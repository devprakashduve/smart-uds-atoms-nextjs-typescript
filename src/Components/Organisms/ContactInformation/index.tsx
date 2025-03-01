import React from 'react';
import { ContactInformationProps } from './types';
import CustomLink from '@/Components/Atoms/CustomLink';

const ContactInformation: React.FC<ContactInformationProps> = ({
  title,
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
            <strong>{phone.phoneLabel}:</strong> {phone.phoneNumber}
          </li>
        )}

        {email && (
          <li>
            <strong>{email.emailLabel}:</strong>
            <CustomLink target="_blank" href={`mailto:${email.emailAddress}`}>
              {email.emailAddress}
            </CustomLink>
          </li>
        )}

        {address && (
          <li>
            <strong>{address.addressLabel}:</strong> {address.AddressDetails}
          </li>
        )}
      </ul>
    </section>
  );
};

export default ContactInformation;
