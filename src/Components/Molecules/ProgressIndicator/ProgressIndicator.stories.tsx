import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressIndicator from '.';
import { ProgressIndicatorProps } from './ProgressIndicatorProps.interface';

export default {
  title: 'Components/Molecules/ProgressIndicator',
  component: ProgressIndicator,
} as Meta;

const Template: StoryFn<ProgressIndicatorProps> = (args) => {
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
      <ProgressIndicator {...args} currentStepIndex={currentStepIndex} />
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={handleNextStep}
      >
        {args.nextButtonText || 'Next Step'}
      </button>
    </div>
  );
};

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.args = {
  currentStepIndex: 1,
  totalStepsCount: 5,
  stepLabels: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
  nextButtonText: 'Next Step',
};
