import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepTracker from '.';
import { StepTrackerProps } from './StepTracker.interface';
import Button from '@/Components/Atoms/Button';

export default {
  title: 'Components/Molecules/StepTracker',
  component: StepTracker,
} as Meta;

const Template: StoryFn<StepTrackerProps> = (args) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(
    args.currentStepIndex
  );

  const handleNextStep = () => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, args.totalStepsCount));
    if (args.onNextStep) {
      args.onNextStep();
    }
  };

  return (
    <div>
      <StepTracker {...args} currentStepIndex={currentStepIndex} />
      <Button onClick={handleNextStep} className="my-4">
        {args.nextButtonText || 'Next Step'}
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  currentStepIndex: 1,
  totalStepsCount: 5,
  nextButtonText: 'Next Step',
};
