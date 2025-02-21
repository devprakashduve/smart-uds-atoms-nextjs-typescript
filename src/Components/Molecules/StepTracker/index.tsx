import React from 'react';
import { StepTrackerProps } from './StepTracker.interface';

const StepTracker: React.FC<StepTrackerProps> = ({
  currentStepIndex,
  totalStepsCount,
  containerClassName,
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center ${containerClassName || ''}`}
    >
      <div className="relative flex w-full items-center justify-between">
        <div
          className={`bg-atom-stepTracker-dark absolute left-0 top-1/2 h-1 w-full`}
        />
        {Array.from({ length: totalStepsCount }, (_, index) => (
          <div
            key={index}
            className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
              index < currentStepIndex
                ? 'bg-atom-stepTracker-dark text-atom-stepTracker-text'
                : index === currentStepIndex
                  ? 'bg-atom-stepTracker-light text-atom-stepTracker-dark'
                  : 'bg-atom-stepTracker-light text-atom-stepTracker-dark'
            }`}
          >
            <span className="">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTracker;
