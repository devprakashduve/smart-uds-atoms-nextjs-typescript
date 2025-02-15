import React from 'react';

import { ProgressBarProps } from './ProgressBarProps.interface';

import './ProgressBar.css';

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  color,
  height = 8,
  striped = false,
}) => {
  const progress = (value / max) * 100;
  const bgColog = color ? `bg-${color}` : 'bg-atom-input-dark';
  return (
    <div
      className={`progress-bar-container bg-atom-input-light w-full h-${height}`}
    >
      <div
        className={`progress-bar ${striped ? 'progress-striped' : ''} ${bgColog}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
