'use client';

import Input from '@/Components/Atoms/InputGroup/Input';
import TextArea from '@/Components/Atoms/InputGroup/TextArea';
import { useState } from 'react';
import { ContactPageProps } from './ContactPage.interface';
import Button from '@/Components/Atoms/Button';

// Header Component
const ContactHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
      {title}
    </h2>
    <p className="mt-2 text-lg/8">{description}</p>
  </div>
);

// Form Fields Component
const ContactFormFields = ({ formData }: { formData: any }) => (
  <div className="grid gap-4">
    {formData.map((field: any) => (
      <Input
        key={field.id}
        id={field.id}
        name={field.name}
        label={field.label}
        autoComplete={field.autoComplete}
        value={field.value}
        type={field.type}
        showIcon={field.showIcon}
      />
    ))}
    <TextArea id="message" label="Message" />
  </div>
);

// ContactPage Component
export default function ContactPage({
  headerTitle,
  headerDescription,
  formData,
  submitButtonText,
}: ContactPageProps) {
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <ContactHeader title={headerTitle} description={headerDescription} />
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <ContactFormFields formData={formData} />
        <div className="mt-10">
          <Button type="submit" className="w-full">
            {submitButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
}
