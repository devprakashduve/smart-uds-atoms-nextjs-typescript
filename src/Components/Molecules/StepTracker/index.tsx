import React from 'react';
import { StepTrackerProps } from './StepTracker.interface';

const StepTracker: React.FC<StepTrackerProps> = ({
  currentStepIndex,
  totalStepsCount,
  containerClassName,
  orientation = 'horizontal',
}) => {
  const progressPercentage = Math.min(
    (currentStepIndex / (totalStepsCount - 1)) * 100,
    100
  );

  return (
    <div
      className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} w-full items-center ${containerClassName || ''}`}
    >
      <div
        className={`relative flex ${orientation === 'vertical' ? 'h-full flex-col' : 'w-full'} items-center justify-between`}
      >
        <div
          className={`absolute bg-atom-stepTracker-light ${orientation === 'vertical' ? 'left-1/2 top-0 h-full w-1' : 'left-0 top-1/2 h-1 w-full'}`}
        />
        <div
          className={`absolute bg-atom-stepTracker-dark ${orientation === 'vertical' ? 'left-1/2 top-0 w-1' : 'left-0 top-1/2 h-1'}`}
          style={{
            [orientation === 'vertical' ? 'height' : 'width']:
              `${progressPercentage}%`,
          }}
        />
        {Array.from({ length: totalStepsCount }, (_, index) => (
          <div
            key={index}
            className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
              index < currentStepIndex
                ? 'bg-atom-stepTracker-dark text-atom-stepTracker-text'
                : index === currentStepIndex
                  ? 'bg-atom-stepTracker-light text-atom-stepTracker-text'
                  : 'bg-atom-stepTracker-light text-atom-stepTracker-text'
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
