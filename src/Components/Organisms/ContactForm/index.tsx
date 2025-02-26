'use client';

import Input from '@/Components/Atoms/InputGroup/Input';
import TextArea from '@/Components/Atoms/InputGroup/TextArea';
import { useState } from 'react';
import { ContactFormProps, formDataProps } from './ContactForm.interface';
import Button from '@/Components/Atoms/Button';
import ContactInformation from '../ContactInformation';
import { TextAreaProps } from '@/Components/Atoms/InputGroup/TextArea/TextAreaProps.interface';

// Form Fields Component
const ContactFormFields = ({
  formData,
  textAreaData,
  handleChange,
}: {
  formData: formDataProps[];
  textAreaData: TextAreaProps[];
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => (
  <div className="grid gap-4">
    {formData?.map((field: formDataProps) => (
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
        isRequired={field.isRequired}
        requiredErrorMessage={field.requiredErrorMessage}
        validationOnFocus={field.validationOnFocus}
        onChange={handleChange}
        maxLength={field.type === 'phone' ? 17 : 50}
      />
    ))}

    {textAreaData?.map((field: TextAreaProps) => (
      <TextArea
        key={field?.id || field.name}
        charCountWarningThreshold={field.charCountWarningThreshold || 10}
        maxLength={field.maxLength || 100}
        onChange={handleChange}
        placeholder={field.placeholder || 'Enter your message here'}
        showCharCount={field.showCharCount || true}
        value={field.value || ''}
        label={field.label || 'Message'}
        isRequired={field.isRequired || true}
        requiredErrorMessage={
          field.requiredErrorMessage || 'Message is required'
        }
        validationOnFocus={field.validationOnFocus || true}
        name={field.name}
      />
    ))}
  </div>
);

// ContactPage Component
export default function ContactForm({
  formData: initialFormData,
  textAreaData: initialTextAreaData,
  contactInfo,
  submitButtonText,
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [textAreaData, setTextAreaData] = useState(initialTextAreaData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) =>
      prevFormData.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
    setTextAreaData((prevTextAreaData) =>
      prevTextAreaData.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({
      formData: formData.map(({ id, ...rest }) => rest),
      textAreaData: textAreaData.map(({ id, ...rest }) => rest),
    });
  };

  return (
    <div>
      {contactInfo && <ContactInformation {...contactInfo} />}
      <form onSubmit={handleSubmit}>
        <ContactFormFields
          formData={formData}
          textAreaData={textAreaData}
          handleChange={handleChange}
        />
        <div className="mt-10">
          <Button type="submit" className="w-full">
            {submitButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
}
