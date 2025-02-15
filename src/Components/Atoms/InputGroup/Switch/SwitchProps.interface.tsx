export interface SwitchProps {
  checked: boolean; // Whether the switch is ON or OFF
  onChange: (checked: boolean) => void; // Callback when the switch state changes
  disabled?: boolean; // Optional flag to disable the switch
  textForOn?: string;
  textForOff?: string;
  disableIcons?: boolean;
  noBackground?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
