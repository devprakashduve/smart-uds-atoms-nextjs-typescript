export interface SliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  onChange: (value: number) => void;
  setStep: (step: number) => void;
  color?: string;
  disabled?: boolean;
  className?: string;
  border?: boolean;
  background?: boolean;
}
