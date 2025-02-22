import { ContactInformationProps } from '../ContactInformation/types';

export interface formDataProps {
  id: string;
  name: string;
  label: string;
  autoComplete: string;
  value: string;
  type: string;
  showIcon: boolean;
  placeholder: string;
  isRequired: boolean;
  requiredErrorMessage: string;
  validationOnFocus: boolean; // Added validationOnFocus property
}
export interface ContactFormProps {
  formData: formDataProps[];
  submitButtonText?: string;
  contactInfo?: ContactInformationProps;
  onSubmit: (value: formDataProps[]) => void;
}
