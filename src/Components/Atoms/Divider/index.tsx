import React from 'react';
import { DividerProps } from './DividerProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Divider: React.FC<DividerProps> = ({
  thickness = 'medium',
  orientation = 'horizontal',
  className,
}) => {
  const isVertical = orientation === 'vertical';

  const dividerClasses = classNames(
    'border-atom-input',
    isVertical
      ? `inline-block h-full self-stretch ${thickness === 'thin' ? 'border-l-2' : thickness === 'thick' ? 'border-l-8' : 'border-l-4'}`
      : `block w-full ${thickness === 'thin' ? 'border-t-2' : thickness === 'thick' ? 'border-t-8' : 'border-t-4'}`,
    className
  );

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={dividerClasses}
    />
  );
};

export default Divider;
