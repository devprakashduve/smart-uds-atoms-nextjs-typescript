import React from 'react';
import { ImageProps } from './ImageProps.interface';

import './Image.css';
import Image from 'next/image';
import { classNames } from '@/Components/Utilities/componentsMethods';

const UDSImage: React.FC<ImageProps> = ({
  src,
  alt,
  width = 300,
  height = 300,
  className,
}) => {
  const imageClasses = classNames('', className);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={imageClasses}
    />
  );
};

export default UDSImage;
