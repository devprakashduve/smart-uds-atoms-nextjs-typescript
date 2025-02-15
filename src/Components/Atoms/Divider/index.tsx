import React from 'react';
import './Divider.css';
import { DividerProps } from './DividerProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 'medium',
  className,
}) => {
  const orientationClasses = {
    horizontal: 'divider-horizontal',
    vertical: 'divider-vertical',
  };

  const thicknessClasses = {
    thin: 'divider-thin',
    medium: 'divider-medium',
    thick: 'divider-thick',
  };

  const dividerClasses = classNames(
    `divider ${orientationClasses[orientation]} ${thicknessClasses[thickness]} border-primary`,
    className
  );
  return <div className={dividerClasses} />;
};

export default Divider;
