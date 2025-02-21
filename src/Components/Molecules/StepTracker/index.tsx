import React from 'react';
import { StepTrackerProps } from './StepTracker.interface';

const StepTracker: React.FC<StepTrackerProps> = ({
  currentStepIndex,
  totalStepsCount,
  containerClassName,
  orientation = 'horizontal',
  size = 'md',
}) => {
  const progressPercentage = Math.min(
    ((currentStepIndex - 1) / (totalStepsCount - 1)) * 100,
    100
  );

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
  };

  return (
    <div
      className={`flex justify-between ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} ${containerClassName || ''}`}
    >
      <div
        className={`flex ${orientation === 'vertical' ? 'absolute h-full flex-col' : 'relative w-full'} items-center justify-between`}
      >
        <div
          className={`absolute bg-atom-stepTracker-light ${orientation === 'vertical' ? 'left-1/2 top-0 h-full w-1' : 'left-0 top-1/2 h-1 w-full'}`}
        />
        <div
          className={`from-atom-stepTracker-background to-atom-stepTracker-to_background absolute bg-gradient-to-r text-atom-stepTracker-text shadow-lg${orientation === 'vertical' ? 'left-1/2 top-0 w-1' : 'left-0 top-1/2 h-1'} transition-all duration-300`}
          style={{
            [orientation === 'vertical' ? 'height' : 'width']:
              `${progressPercentage}%`,
          }}
        />
        {Array.from({ length: totalStepsCount }, (_, index) => (
          <div
            key={index}
            className={`relative flex ${sizeClasses[size]} items-center justify-center rounded-full ${
              index < currentStepIndex
                ? 'from-atom-stepTracker-background to-atom-stepTracker-to_background bg-gradient-to-r text-atom-stepTracker-text shadow-lg'
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
