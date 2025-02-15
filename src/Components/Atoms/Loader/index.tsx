import React from 'react';

import { LoaderProps } from './LoaderProps.interface';

import './Loader.css';

const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = 'blue',
  speed = 'normal',
}) => {
  const sizeClasses = {
    small: 'loader-small',
    medium: 'loader-medium',
    large: 'loader-large',
  };

  const speedClasses = {
    slow: 'loader-slow',
    normal: 'loader-normal',
    fast: 'loader-fast',
  };

  return (
    <div
      className={`loader ${sizeClasses[size]} ${speedClasses[speed]} ${color ? `text-${'red'}` : ''}`}
    >
      <div className="loader-circle"></div>
    </div>
  );
};

export default Loader;
