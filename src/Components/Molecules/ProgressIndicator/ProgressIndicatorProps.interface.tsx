export interface ProgressIndicatorProps {
  currentStepIndex: number; // The current step index in the progress
  totalStepsCount: number; // Total number of steps
  stepLabels?: string[]; // Optional labels for each step
  containerClassName?: string; // Optional additional className for the container
  nextButtonText?: string; // Optional text for the next button
  onNextStep?: () => void; // Optional callback for next step button click
}
