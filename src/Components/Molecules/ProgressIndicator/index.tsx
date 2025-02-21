import React from 'react';
import { ProgressIndicatorProps } from './ProgressIndicatorProps.interface';

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStepIndex,
  totalStepsCount,
  stepLabels,
  containerClassName,
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center ${containerClassName || ''}`}
    >
      <div className="relative flex w-full items-center justify-between">
        <div className={`absolute left-0 top-1/2 h-1 w-full bg-gray-500`} />
        {Array.from({ length: totalStepsCount }, (_, index) => (
          <div
            key={index}
            className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
              index < currentStepIndex
                ? 'bg-blue-500'
                : index === currentStepIndex
                  ? 'bg-gray-900'
                  : 'bg-gray-900'
            }`}
          >
            {stepLabels && stepLabels[index] && (
              <span className="absolute mt-10 w-20 text-center text-xs">
                {stepLabels[index]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
