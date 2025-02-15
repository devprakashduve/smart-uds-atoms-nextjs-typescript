import React, { useState } from 'react';
import { SwitchProps } from './SwitchProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Switch = (props: SwitchProps) => {
  const {
    textForOn,
    textForOff,
    disabled,
    checked,
    disableIcons,
    noBackground,
    size = 'md',
  } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const switchClass = classNames(
    !noBackground
      ? isChecked
        ? 'bg-line-light'
        : 'bg-line-light'
      : isChecked
        ? 'border border-border'
        : 'border border-border-light'
  );

  const sizeClasses = {
    sm: {
      container: 'w-16 h-8',
      dot: 'w-6 h-6',
    },
    md: {
      container: 'w-20 h-10',
      dot: 'w-8 h-8 ',
    },
    lg: {
      container: 'w-24 h-12',
      dot: 'w-10 h-10 ',
    },
  };

  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          disabled={disabled}
        />
        {/* Switch Background */}
        <div
          className={`rounded-full border border-line-light shadow-inner transition-all hover:border-line focus:border-line-dark ${switchClass} ${sizeClasses[size].container}`}
        ></div>

        {/* Thumb with Check Mark */}
        <div
          className={`absolute left-2 top-1 flex items-center justify-center rounded-full bg-line-dark shadow transition-all ${sizeClasses[size].dot} ${
            isChecked ? 'translate-x-full' : ''
          }`}
        >
          {!disableIcons &&
            (isChecked ? (
              <svg
                className="h-6 w-6 text-letter-dark dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-letter-dark dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            ))}
        </div>
      </div>
      {/* Label */}
      <span className="ml-3">{isChecked ? textForOn : textForOff}</span>
    </label>
  );
};

export default Switch;
