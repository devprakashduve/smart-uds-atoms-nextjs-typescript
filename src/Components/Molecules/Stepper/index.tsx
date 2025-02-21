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
  prevButtonText = 'Prev',
  nextButtonText = 'Next',
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

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'h-8 w-8';
      case 'md':
        return 'h-10 w-10';
      case 'lg':
      default:
        return 'h-14 w-14';
    }
  };
  const progressPercentage = Math.min(
    ((currentStep - 1) / (steps - 1)) * 100,
    100
  );
  return (
    <div
      className={`w-full ${orientation === 'vertical' ? 'flex flex-col' : ''}`}
    >
      <div
        className={`flex ${orientation === 'vertical' ? 'absolute h-full flex-col' : 'relative w-full'} items-center justify-between`}
      >
        <div
          className={`absolute ${orientation === 'vertical' ? 'left-2/4 top-0 h-full w-0.5' : 'left-0 top-2/4 h-0.5 w-full'} -translate-${orientation === 'vertical' ? 'x' : 'y'}-2/4 bg-atom-stepTracker-light`}
        ></div>
        <div
          className={`absolute ${orientation === 'vertical' ? 'left-2/4 top-0 h-full w-0.5' : 'left-0 top-2/4 h-0.5 w-full'} -translate-${orientation === 'vertical' ? 'x' : 'y'}-2/4 bg-atom-stepTracker-dark transition-all duration-500`}
          style={{
            [orientation === 'vertical' ? 'height' : 'width']:
              `${progressPercentage}%`,
          }}
        ></div>
        {Array.from({ length: steps }, (_, index) => {
          const step = index + 1;
          const isActive = step <= currentStep;
          return (
            <div
              key={step}
              className={`relative z-10 grid ${getSizeClass()} place-items-center rounded-full font-bold transition-all duration-300 ${isActive ? 'bg-atom-stepTracker-dark text-atom-stepTracker-text' : 'bg-atom-stepTracker-light'} `}
            >
              {showCounter && step}
            </div>
          );
        })}
      </div>
      {nextButtonText && prevButtonText && (
        <div
          className={`mt-16 flex ${orientation === 'vertical' ? 'flex-col' : 'justify-between'} max-w-sm items-center gap-2`}
        >
          <Button onClick={handlePrev} disabled={currentStep === 1}>
            {prevButtonText}
          </Button>

          <Button onClick={handleNext} disabled={currentStep === steps}>
            {nextButtonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Stepper;
