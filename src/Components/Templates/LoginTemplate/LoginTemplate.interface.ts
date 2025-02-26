export interface LoginTemplateProps {
  title?: string;
  email: string;
  password: string;
  onSubmit: (data: { email: string; password: string }) => void;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  emailRequiredErrorMessage: string;
  passwordRequiredErrorMessage: string;
  emailId: string;
  emailName: string;
  emailLabel: string;
  emailType: string;
  passwordId: string;
  passwordName: string;
  passwordLabel: string;
  passwordType: string;
  buttonChild: string;
}
