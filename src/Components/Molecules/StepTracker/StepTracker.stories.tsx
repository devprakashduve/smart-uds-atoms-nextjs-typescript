import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepTracker from '.';
import { StepTrackerProps } from './StepTracker.interface';
import Button from '@/Components/Atoms/Button';

export default {
  title: 'Components/Molecules/StepTracker',
  component: StepTracker,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
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
    <div className="">
      <StepTracker {...args} currentStepIndex={currentStepIndex} />
      <Button onClick={handleNextStep} className="m-10">
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
  orientation: 'horizontal',
  size: 'md',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  currentStepIndex: 1,
  totalStepsCount: 5,
  nextButtonText: 'Next Step',
  orientation: 'horizontal',
  size: 'md',
};

export const Vertical = Template.bind({});
Vertical.args = {
  currentStepIndex: 1,
  totalStepsCount: 5,
  nextButtonText: 'Next Step',
  orientation: 'vertical',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  currentStepIndex: 1,
  totalStepsCount: 5,
  nextButtonText: 'Next Step',
  orientation: 'horizontal',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  currentStepIndex: 1,
  totalStepsCount: 5,
  nextButtonText: 'Next Step',
  orientation: 'horizontal',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  currentStepIndex: 1,
  totalStepsCount: 5,
  nextButtonText: 'Next Step',
  orientation: 'horizontal',
  size: 'lg',
};
