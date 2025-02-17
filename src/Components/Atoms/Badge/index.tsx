import React from 'react';
import { BadgeProps } from './BadgeProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ scale = 'base', children, className, ariaLabel }, ref) => {
    const badgeClass = classNames(
      'bg-atom-badge-background text-atom-badge-text/40 inline-flex items-center px-3 py-1',
      `text-${scale}`,
      className
    );

    return (
      <span
        ref={ref}
        className={badgeClass}
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
