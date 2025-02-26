export interface LoginTemplateProps {
  email: string;
  password: string;
  onSubmit: (data: { email: string; password: string }) => void;
}
