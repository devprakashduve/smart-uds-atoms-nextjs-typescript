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
  const bgColog = color ? `bg-${color}` : 'bg-line-dark';
  return (
    <div className={`progress-bar-container w-full bg-line-light h-${height}`}>
      <div
        className={`progress-bar ${striped ? 'progress-striped' : ''} ${bgColog}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
