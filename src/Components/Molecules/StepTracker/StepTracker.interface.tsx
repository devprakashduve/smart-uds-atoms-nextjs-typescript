export interface StepTrackerProps {
  currentStepIndex: number; // The current step index in the progress
  totalStepsCount: number; // Total number of steps
  containerClassName?: string; // Optional additional className for the container
  nextButtonText?: string; // Optional text for the next button
  onNextStep?: () => void; // Optional callback for next step button click
  orientation?: 'horizontal' | 'vertical'; // Optional orientation property
}
