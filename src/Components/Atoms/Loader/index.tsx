import React from 'react';
import { LoaderProps } from './LoaderProps.interface';

const shimmer =
  'animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700';

const Loader: React.FC<LoaderProps> = ({
  variant = 'line',
  lines = 3,
  width = '100%',
  height,
  rounded = false,
  className,
}) => {
  const roundedClass = rounded ? 'rounded-full' : 'rounded';
  const wStyle = { width, height: height ?? undefined };

  if (variant === 'circle') {
    const size = height ?? width ?? 48;
    return (
      <div
        aria-busy="true"
        aria-label="Loading"
        role="status"
        className={`${shimmer} rounded-full ${className ?? ''}`}
        style={{ width: size, height: size }}
      />
    );
  }

  if (variant === 'image') {
    return (
      <div
        aria-busy="true"
        aria-label="Loading image"
        role="status"
        className={`${shimmer} ${roundedClass} ${className ?? ''}`}
        style={{ width: width ?? '100%', height: height ?? 200 }}
      />
    );
  }

  if (variant === 'card') {
    return (
      <div
        aria-busy="true"
        aria-label="Loading card"
        role="status"
        className={`rounded-card border border-gray-200 p-4 shadow-sm dark:border-gray-700 ${className ?? ''}`}
      >
        <div className={`${shimmer} mb-4 h-40 w-full rounded`} />
        <div className={`${shimmer} mb-2 h-4 w-3/4 rounded`} />
        <div className={`${shimmer} h-4 w-1/2 rounded`} />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div
        aria-busy="true"
        aria-label="Loading text"
        role="status"
        className={`space-y-2 ${className ?? ''}`}
      >
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${shimmer} h-4 rounded`}
            style={{ width: i === lines - 1 ? '60%' : '100%' }}
          />
        ))}
      </div>
    );
  }

  // Default: 'line'
  return (
    <div
      aria-busy="true"
      aria-label="Loading"
      role="status"
      className={`space-y-2 ${className ?? ''}`}
    >
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${shimmer} ${roundedClass}`}
          style={{ ...wStyle, height: height ?? 16 }}
        />
      ))}
    </div>
  );
};

export default Loader;
