import React, { useState } from 'react';
import { StepperProps } from './Stepper.interface';
import Button from '@/Components/Atoms/Button';

const Stepper = ({
  steps = 3,
  value = 1,
  onChange,
  showCounter = false,
  size = 'lg',
  orientation = 'horizontal',
  prevButtonText,
  nextButtonText,
}: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(value);

  const handleNext = () => {
    if (currentStep < steps) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      onChange?.(newStep);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      onChange?.(newStep);
    }
  };

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
  };

  const progressPercentage = Math.min(
    ((currentStep - 1) / (steps - 1)) * 100,
    100
  );

  return (
    <div
      className={`flex justify-between ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}
    >
      <div
        className={`flex ${orientation === 'vertical' ? 'absolute h-full flex-col' : 'relative w-full'} items-center justify-between`}
      >
        <div
          className={`absolute bg-atom-stepTracker-light ${orientation === 'vertical' ? 'left-1/2 top-0 h-full w-1' : 'left-0 top-1/2 h-1 w-full'}`}
        />
        <div
          className={`absolute bg-gradient-to-r from-atom-stepTracker-background to-atom-stepTracker-to_background text-atom-stepTracker-text shadow-lg ${orientation === 'vertical' ? 'left-1/2 top-0 w-1' : 'left-0 top-1/2 h-1'} transition-all duration-300`}
          style={{
            [orientation === 'vertical' ? 'height' : 'width']:
              `${progressPercentage}%`,
          }}
        />
        {Array.from({ length: steps }, (_, index) => (
          <div
            key={index}
            className={`relative flex ${sizeClasses[size]} items-center justify-center rounded-full ${
              index < currentStep
                ? 'bg-gradient-to-r from-atom-stepTracker-background to-atom-stepTracker-to_background text-atom-stepTracker-text shadow-lg'
                : index === currentStep
                  ? 'bg-atom-stepTracker-light text-atom-stepTracker-text'
                  : 'bg-atom-stepTracker-light text-atom-stepTracker-text'
            }`}
          >
            {showCounter && <span>{index + 1}</span>}
          </div>
        ))}
      </div>
      {(nextButtonText || prevButtonText) && (
        <div
          className={`mt-16 flex ${orientation === 'vertical' ? 'flex-col' : 'justify-between'} max-w-sm items-center gap-2`}
        >
          {prevButtonText && (
            <Button onClick={handlePrev} disabled={currentStep === 1}>
              {prevButtonText}
            </Button>
          )}

          {nextButtonText && (
            <Button onClick={handleNext} disabled={currentStep === steps}>
              {nextButtonText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Stepper;
