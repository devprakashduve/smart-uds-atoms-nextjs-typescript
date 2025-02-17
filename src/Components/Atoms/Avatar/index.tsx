import React, { useState } from 'react';
import { AvatarProps } from './AvatarProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';
import './Avatar.css';
import UDSImage from '../Image';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 16,
  className = '',
  width = 105,
  height = 105,
  circle = false,
  rounded = false,
  initials,
  status,
}) => {
  const [imageError, setImageError] = useState(false);
  const containerClasses = classNames(
    `w-${size} h-${size} relative`,
    `overflow-hidden ${rounded && 'rounded'} ${circle && 'rounded-full'} ${className}`
  );
  const imgClasses = `w-${size} h-${size} `;

  const showImage = src && !imageError;

  return (
    <div className={containerClasses}>
      {showImage ? (
        <UDSImage
          className={imgClasses}
          src={src}
          alt={alt}
          width={width}
          height={height}
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className={`flex w-${size} h-${size} items-center justify-center bg-atom-avatar-background font-semibold text-atom-avatar-text`}
          role="img"
          aria-label={alt}
        >
          {initials}
        </div>
      )}
      {status && (
        <div
          className={classNames(
            `absolute bottom-0 right-0 m-1 h-3 w-3 animate-pulse rounded-full border-2`,
            status === 'online' && 'bg-success',
            status === 'offline' && 'bg-neutral',
            status === 'away' && 'bg-warning',
            status === 'busy' && 'bg-error'
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
