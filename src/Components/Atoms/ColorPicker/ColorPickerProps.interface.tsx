export interface ColorPickerProps {
  /** Current hex color value (e.g. '#DB2777') */
  value?: string;
  /** Default value when uncontrolled */
  defaultValue?: string;
  /** Label for the color picker */
  label?: string;
  /** Callback when the color changes */
  onChange?: (color: string) => void;
  /** Show the hex value text input. Default: true */
  showHexInput?: boolean;
  /** Disabled state */
  disabled?: boolean;
  className?: string;
}
