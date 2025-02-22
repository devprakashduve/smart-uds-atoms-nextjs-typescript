'use client';

import { useState } from 'react';

import InputField from '@/Components/Molecules/InputGroup/InputField';
import PhoneNumberField from '@/Components/Molecules/InputGroup/PhoneNumberField';
import TextareaField from '@/Components/Molecules/InputGroup/TextareaField';
// import AgreementField from '@/Components/Atoms/InputGroup/AgreementField';

// Header Component
const ContactHeader = () => (
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
      Contact sales
    </h2>
    <p className="mt-2 text-lg/8 text-gray-600">
      Aute magna irure deserunt veniam aliqua magna enim voluptate. this i test
    </p>
  </div>
);

// ContactPage Component
export default function ContactPage() {
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <ContactHeader />
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <InputField
            id="first-name"
            name="first-name"
            label="First name"
            autoComplete="given-name"
          />
          <InputField
            id="last-name"
            name="last-name"
            label="Last name"
            autoComplete="family-name"
          />
          <InputField
            id="company"
            name="company"
            label="Company"
            autoComplete="organization"
          />
          <InputField
            id="email"
            name="email"
            type="email"
            label="Email"
            autoComplete="email"
          />
          <PhoneNumberField />
          <TextareaField id="message" name="message" label="Message" />
          {/* <AgreementField agreed={agreed} setAgreed={setAgreed} /> */}
        </div>
        {/* <SubmitButton /> */}
      </form>
    </div>
  );
}
