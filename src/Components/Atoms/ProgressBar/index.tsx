import React from 'react';
import { ProgressBarProps } from './ProgressBarProps.interface';

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  height = 8,
  striped = true,
  ariaLabel,
  className,
}) => {
  const progress = Math.min(Math.max((value / max) * 100, 0), 100);
  const bgColor = 'bg-atom-progressBar-background';
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={ariaLabel || `Progress: ${Math.round(progress)}%`}
      className={`w-full overflow-hidden rounded-input bg-atom-progressBar-background/20 h-${height} ${className ?? ''}`}
    >
      <div
        className={`h-full transition-all duration-300 ease-in-out ${striped ? 'animate-progress-stripes bg-gradient-to-r from-transparent via-white to-transparent' : ''} ${bgColor}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
