import React, { useState, useId } from 'react';
import { classNames } from '@/Components/Utilities/componentsMethods';
import { TooltipProps, TooltipPosition } from './TooltipProps.interface';

const styles = {
  clipBottom: {
    clipPath: 'polygon(100% 0, 50% 100%, 0 100%)',
  },
  clipTop: {
    clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
  },
};

const positionClasses: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
  left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  right: 'left-full top-1/2 ml-2 -translate-y-1/2',
};

export default function Tooltip({
  content,
  children,
  setBackground,
  isBackground = false,
  isRounded = false,
  position = 'top',
  id: externalId,
  className,
}: TooltipProps) {
  const generatedId = useId();
  const tooltipId = externalId || generatedId;
  const [isVisible, setIsVisible] = useState(false);

  const tooltipClasses = classNames(
    'p-2 text-center text-xs min-w-max max-w-xs',
    isBackground
      ? 'bg-atom-btn-dark text-atom-btn-light'
      : 'border border-atom-btn-dark text-atom-btn-dark bg-white',
    setBackground,
    isRounded ? 'rounded' : ''
  );

  const tipClasses = classNames(
    'h-5 w-4 bg-atom-btn-dark',
    setBackground
  );

  const showArrow = position === 'top' || position === 'bottom';

  return (
    <span
      className={`relative inline-flex max-w-max flex-col items-center justify-center ${className ?? ''}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      aria-describedby={isVisible ? tooltipId : undefined}
    >
      {children}
      {isVisible && (
        <span
          id={tooltipId}
          role="tooltip"
          className={`absolute z-50 ${positionClasses[position]} flex flex-col items-center`}
        >
          {position === 'bottom' && showArrow && (
            <span className={tipClasses} style={styles.clipTop} aria-hidden="true" />
          )}
          <span className={tooltipClasses}>{content}</span>
          {position === 'top' && showArrow && (
            <span className={tipClasses} style={styles.clipBottom} aria-hidden="true" />
          )}
        </span>
      )}
    </span>
  );
}
