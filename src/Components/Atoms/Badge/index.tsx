import React from 'react';
import { BadgeProps } from './BadgeProps.interface';
import './Badge.css';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      backgroundColor,
      scale = 'base',
      children,
      variant = 'primary',
      className,
      ariaLabel,
    },
    ref
  ) => {
    const badgeClass = classNames(
      'badge-base',
      `text-${scale}`,
      `badge-${variant}`,
      className
    );

    return (
      <span
        ref={ref}
        className={badgeClass}
        style={{ backgroundColor }}
        role="status"
        aria-label={ariaLabel}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
