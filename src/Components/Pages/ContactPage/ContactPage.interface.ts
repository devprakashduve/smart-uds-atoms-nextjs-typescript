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
export interface ContactPageProps {
  headerTitle: string;
  headerDescription: string;
  formData: formDataProps[];
  submitButtonText: string;
  onSubmit: (value: formDataProps[]) => void;
}
