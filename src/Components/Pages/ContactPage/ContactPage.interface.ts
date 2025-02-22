export interface ContactPageProps {
  headerTitle: string;
  headerDescription: string;
  formData: Array<{
    id: string;
    name: string;
    label: string;
    autoComplete: string;
    value: string;
    type: string;
    showIcon: boolean;
  }>;
  submitButtonText: string;
}
