import React, { useState } from 'react';
import { AvatarProps } from './AvatarProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';
import Img from '../Img';
import './Avatar.css';

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
    `overflow-hidden ${rounded ? 'rounded' : ''} ${circle ? 'rounded-full' : ''} ${className}`
  );
  const imgClasses = 'w-full h-full object-cover';

  const showImage = src && !imageError;

  return (
    <div className={containerClasses}>
      {showImage ? (
        <Img
          className={imgClasses}
          src={src}
          alt={alt}
          width={width}
          height={height}
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-gray-300 font-semibold text-white"
          role="img"
          aria-label={alt}
        >
          {initials}
        </div>
      )}
      {status && (
        <div
          className={classNames(
            `absolute h-3 w-3 rounded-full border-2 border-white ${circle ? 'right-2 top-2' : 'right-1 top-1'}`,
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
