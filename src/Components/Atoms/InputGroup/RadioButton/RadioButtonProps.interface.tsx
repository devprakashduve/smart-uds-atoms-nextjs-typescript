export interface RadioButtonProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  disabled?: boolean;
  id?: string;
  labelClassNames?: string;
  value?: string;
  checked?: boolean;
  className?: string;
}
