import React from 'react';
import { StepTrackerProps } from './StepTracker.interface';

const StepTracker: React.FC<StepTrackerProps> = ({
  currentStepIndex,
  totalStepsCount,
  containerClassName,
}) => {
  const progressPercentage = Math.min(
    (currentStepIndex / (totalStepsCount - 1)) * 100,
    100
  );

  return (
    <div
      className={`flex w-full flex-col items-center ${containerClassName || ''}`}
    >
      <div className="relative flex w-full items-center justify-between">
        <div className="bg-atom-stepTracker-light absolute left-0 top-1/2 h-1 w-full" />
        <div
          className="bg-atom-stepTracker-dark absolute left-0 top-1/2 h-1"
          style={{ width: `${progressPercentage}%` }}
        />
        {Array.from({ length: totalStepsCount }, (_, index) => (
          <div
            key={index}
            className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
              index < currentStepIndex
                ? 'bg-atom-stepTracker-dark text-atom-stepTracker-text'
                : index === currentStepIndex
                  ? 'text-atom-stepTracker-text bg-atom-stepTracker-light'
                  : 'text-atom-stepTracker-text bg-atom-stepTracker-light'
            }`}
          >
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTracker;
