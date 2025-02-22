'use client';

import Input from '@/Components/Atoms/InputGroup/Input';
import TextArea from '@/Components/Atoms/InputGroup/TextArea';
import { useState } from 'react';
import { ContactFormProps } from './ContactForm.interface';
import Button from '@/Components/Atoms/Button';
import ContactInformation from '../ContactInformation';

// Form Fields Component
const ContactFormFields = ({
  formData,
  handleChange,
}: {
  formData: any;
  handleChange: any;
}) => (
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
        placeholder={field.placeholder}
        isRequired={true}
        requiredErrorMessage={field.requiredErrorMessage}
        validationOnFocus={true}
        onChange={handleChange}
        maxLength={field.type === 'phone' ? 17 : 50}
      />
    ))}
    <TextArea
      charCountWarningThreshold={10}
      maxLength={100}
      onChange={handleChange}
      placeholder="Enter your message here"
      showCharCount
      value={
        formData.find((field: any) => field.name === 'message')?.value || ''
      }
      label="Message"
      isRequired={true}
      requiredErrorMessage="Message is required"
      validationOnFocus={true}
    />
  </div>
);

// ContactPage Component
export default function ContactForm({
  formData: initialFormData,
  contactInfo,
  submitButtonText,
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) =>
      prevFormData.map((field: any) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <div>
      {contactInfo && <ContactInformation {...contactInfo} />}
      <form onSubmit={handleSubmit}>
        <ContactFormFields formData={formData} handleChange={handleChange} />
        <div className="mt-10">
          <Button type="submit" className="w-full">
            {submitButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
}
