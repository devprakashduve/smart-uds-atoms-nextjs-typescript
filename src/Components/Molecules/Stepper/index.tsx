import React, { useState } from 'react';
import { StepperProps } from './Stepper.interface';
import Button from '@/Components/Atoms/Button';

const Stepper = ({
  steps = 3,
  value = 1,
  onChange,
  showCounter = false,
  size = 'lg',
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
    <div className="w-full">
      <div className="relative flex w-full items-center justify-between">
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-line"></div>
        <div
          className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-success transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps - 1)) * 100}%` }}
        ></div>
        {Array.from({ length: steps }, (_, index) => {
          const step = index + 1;
          const isActive = step <= currentStep;
          return (
            <div
              key={step}
              className={`relative z-10 grid h-10 w-10 place-items-center rounded-full font-bold transition-all duration-300 ${
                isActive ? 'bg-success text-white' : 'text- bg-line'
              }`}
            >
              {showCounter && step}
            </div>
          );
        })}
      </div>
      <div className="mt-16 flex justify-between">
        <Button
          variant={'btn-simple'}
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          Prev
        </Button>

        <Button
          variant={'btn-simple'}
          onClick={handleNext}
          disabled={currentStep === steps}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Stepper;
