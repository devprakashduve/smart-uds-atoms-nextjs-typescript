import React from 'react';
import { ProgressIndicatorProps } from './ProgressIndicatorProps.interface';
import './ProgressIndicator.css';

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  stepLabels,
  className,
}) => {
  return (
    <div className={`progress-indicator-container ${className || ''}`}>
      <div className="progress-bar">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`progress-step ${
              index < currentStep
                ? 'completed'
                : index === currentStep
                  ? 'active'
                  : ''
            }`}
          >
            {stepLabels && stepLabels[index] && (
              <span className="progress-label">{stepLabels[index]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
