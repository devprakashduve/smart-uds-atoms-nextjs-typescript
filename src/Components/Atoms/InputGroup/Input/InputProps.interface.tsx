export interface InputProps {
  /** The current value of the input */
  value: string;
  /** Callback for when the input value changes */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Input type as a string, e.g., "text", "password", "email", etc. */
  type: string;
  /** Label text for the input */
  label?: string;
  /** HTML id attribute for the input */
  id?: string;
  /** Name attribute for the input */
  name: string;
  /** Additional custom class names */
  className?: string;
  /** Input size; defaults to MD */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the input is required */
  isRequired?: boolean;
  /** Whether to show an icon inside the input (e.g., for password toggling) */
  showIcon?: boolean;
  /** Optional custom SVG icon element */
  customIconSVG?: React.ReactNode;
  /** Optional custom icon name (if not provided, a default is chosen based on the input type) */
  customIconName?: string;
  isBorder?: boolean;
  min?: string;
  max?: string;
  step?: string;
  requiredErrorMessage?: string;
  validationErrorMessage?: string;
  validationOnFocus?: boolean;
}
