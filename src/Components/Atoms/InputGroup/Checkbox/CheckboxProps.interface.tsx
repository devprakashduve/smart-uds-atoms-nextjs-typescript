export interface CheckboxProps {
  checked: boolean;
  toggleChecked: (checked: boolean) => void;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  name: string;
  disabled?: boolean;
  indeterminate?: boolean;
  rounded?: boolean;
}
