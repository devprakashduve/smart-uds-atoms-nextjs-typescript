export interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void; // Renamed from toggleChecked
  label: string;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  name: string;
  disabled?: boolean;
  indeterminate?: boolean;
}
