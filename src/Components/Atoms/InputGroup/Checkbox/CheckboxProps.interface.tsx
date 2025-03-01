import { ReactNode } from 'react';

export interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void; // Renamed from toggleChecked
  label: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  name: string;
  disabled?: boolean;
  indeterminate?: boolean;
}
