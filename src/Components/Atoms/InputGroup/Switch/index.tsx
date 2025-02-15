import React, { useState } from 'react';
import { SwitchProps } from './SwitchProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';
import Icon from '../../Icon';

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
        ? 'bg-atom-input/40'
        : 'bg-atom-input/40'
      : isChecked
        ? 'border border-input'
        : 'border border-input/40'
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
          className={`rounded-input border border-atom-input/40 shadow-inner transition-all hover:border-atom-input focus:border-atom-input ${switchClass} ${sizeClasses[size].container}`}
        ></div>

        {/* Thumb with Check Mark */}
        <div
          className={`absolute left-2 top-1 flex items-center justify-center rounded-input bg-atom-input shadow transition-all ${sizeClasses[size].dot} ${
            isChecked ? 'translate-x-full' : ''
          }`}
        >
          {!disableIcons &&
            (isChecked ? (
              <Icon
                name="check"
                variant={'outline'}
                className="text-atom-input-text dark:text-atom-input-background"
              />
            ) : (
              <Icon
                name="close"
                variant={'outline'}
                className="text-atom-input-text dark:text-atom-input-background"
              />
            ))}
        </div>
      </div>
      {/* Label */}
      <span className="ml-3">{isChecked ? textForOn : textForOff}</span>
    </label>
  );
};

export default Switch;
