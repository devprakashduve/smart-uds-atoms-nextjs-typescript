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

  switch (size) {
    case 'sm':
      break;
    case 'md':
      break;
    case 'lg':
      break;
    default:
      break;
  }

  return (
    <div
      className={`w-full ${orientation === 'vertical' ? 'flex flex-col' : ''}`}
    >
      <div
        className={`relative flex ${orientation === 'vertical' ? 'flex-col' : 'w-full'} items-center justify-between`}
      >
        <div
          className={`absolute ${orientation === 'vertical' ? 'left-2/4 top-0 h-full w-0.5' : 'left-0 top-2/4 h-0.5 w-full'} -translate-${orientation === 'vertical' ? 'x' : 'y'}-2/4 bg-atom-stepTracker-light`}
        ></div>
        <div
          className={`absolute ${orientation === 'vertical' ? 'left-2/4 top-0 h-full w-0.5' : 'left-0 top-2/4 h-0.5 w-full'} -translate-${orientation === 'vertical' ? 'x' : 'y'}-2/4 bg-atom-stepTracker-dark transition-all duration-500`}
          style={{
            [orientation === 'vertical' ? 'height' : 'width']:
              `${((currentStep - 1) / (steps - 1)) * 100}%`,
          }}
        ></div>
        {Array.from({ length: steps }, (_, index) => {
          const step = index + 1;
          const isActive = step <= currentStep;
          return (
            <div
              key={step}
              className={`relative z-10 grid h-10 w-10 place-items-center rounded-full font-bold transition-all duration-300 ${isActive ? 'bg-atom-stepTracker-dark text-white' : 'text- bg-atom-stepTracker-light'} ${orientation === 'vertical' ? 'mb-4' : ''}`}
            >
              {showCounter && step}
            </div>
          );
        })}
      </div>
      <div
        className={`mt-16 flex ${orientation === 'vertical' ? 'flex-col' : 'justify-between'}`}
      >
        <Button onClick={handlePrev} disabled={currentStep === 1}>
          Prev
        </Button>

        <Button onClick={handleNext} disabled={currentStep === steps}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Stepper;
