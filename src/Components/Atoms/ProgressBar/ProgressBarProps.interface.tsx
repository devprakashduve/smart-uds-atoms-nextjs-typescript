export interface ProgressBarProps {
  value: number; // The current value of the progress (0 to 100)
  max: number; // The maximum value of the progress
  height?: number; // Optional height for the progress bar
  striped?: boolean; // Whether to have striped effect
}
