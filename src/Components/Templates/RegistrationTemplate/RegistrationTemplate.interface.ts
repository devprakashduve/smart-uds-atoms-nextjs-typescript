export interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isRequired: boolean;
  requiredErrorMessage: string;
  disablePasswordHint?: boolean;
  validationOnFocus?: boolean;
}

export interface RegistrationTemplateProps {
  inputFields: InputFieldProps[];
  error: string;
  setError: (error: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  title: string;
  registerButtonText: string;
  registerButtonChild?: React.ReactNode;
}
