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
  /** Whether to show a border around the input */
  isBorder?: boolean;
  /** Minimum value for the input (for number inputs) */
  min?: string;
  /** Maximum value for the input (for number inputs) */
  max?: string;
  /** Step value for the input (for number inputs) */
  step?: string;
  /** Error message to display when the input is required but not filled */
  requiredErrorMessage?: string;
  /** Error message to display when the input value does not match the pattern */
  validationErrorMessage?: string;
  /** Whether to validate the input on focus */
  validationOnFocus?: boolean;
  /** Whether to enable autocomplete for the input */
  autoComplete?: string;
  /** Custom regex pattern for validation */
  pattern?: string;
  /** Maximum length of the input value */
  maxLength?: number;
  disablePasswordHint?: boolean;
}
