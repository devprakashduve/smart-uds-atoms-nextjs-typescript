export interface StepperProps {
  steps?: number;
  value?: number;
  onChange?: (step: number) => void;
  showCounter?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
