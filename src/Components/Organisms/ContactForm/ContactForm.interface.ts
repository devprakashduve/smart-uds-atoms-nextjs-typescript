import { ContactInformationProps } from '../ContactInformation/types';
import { TextAreaProps } from '@/Components/Atoms/InputGroup/TextArea/TextAreaProps.interface';

export interface formDataProps {
  id?: string;
  name: string;
  label: string;
  autoComplete: string;
  value: string;
  type: string;
  showIcon: boolean;
  placeholder: string;
  isRequired: boolean;
  requiredErrorMessage: string;
  validationOnFocus: boolean;
}

export interface ContactFormProps {
  formData: formDataProps[];
  textAreaData: TextAreaProps[];
  submitButtonText: string;
  contactInfo?: ContactInformationProps;
  onSubmit: (data: {
    formData: formDataProps[];
    textAreaData: TextAreaProps[];
  }) => void;
}
