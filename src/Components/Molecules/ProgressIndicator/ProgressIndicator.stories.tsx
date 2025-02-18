import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressIndicator from '.';
import { ProgressIndicatorProps } from './ProgressIndicatorProps.interface';

export default {
  title: 'Components/Molecules/ProgressIndicator',
  component: ProgressIndicator,
} as Meta;

const Template: StoryFn<ProgressIndicatorProps> = (args) => {
  const [currentStep, setCurrentStep] = useState(args.currentStep);

  return (
    <div>
      <ProgressIndicator {...args} currentStep={currentStep} />
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={() =>
          setCurrentStep((prev) => Math.min(prev + 1, args.totalSteps))
        }
      >
        Next Step
      </button>
    </div>
  );
};

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.args = {
  currentStep: 1,
  totalSteps: 5,
  stepLabels: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
};
