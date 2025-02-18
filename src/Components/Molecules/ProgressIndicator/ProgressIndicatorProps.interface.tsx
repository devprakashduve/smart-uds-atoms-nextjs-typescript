export interface ProgressIndicatorProps {
  currentStep: number; // The current step in the progress
  totalSteps: number; // Total number of steps
  stepLabels?: string[]; // Optional labels for each step
  className?: string; // Optional additional className for the container
}
