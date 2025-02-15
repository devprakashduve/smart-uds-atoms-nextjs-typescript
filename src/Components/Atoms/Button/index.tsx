import React from 'react';
import {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonRounded,
} from './ButtonProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';
import './Button.css';

const variantClasses: Record<ButtonVariant, string> = {
  default: 'btn-default',
  outline: 'btn-outline',
  pill: 'btn-pill',
  'pill-outline': 'btn-pill-outline',
  bordered: 'btn-bordered',
  'three-d': 'btn-three-d',
  elevated: 'btn-elevated',
  link: 'btn-link',
  icon: 'btn-icon',
  groups: 'btn-groups',
  disabled: 'btn-disabled',
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'py-1 px-2.5 text-xs',
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-4 text-sm',
  lg: 'py-2.5 px-5 text-base',
  xl: 'py-3.5 px-6 text-base',
};

const roundedClasses: Record<ButtonRounded, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  href,
  target,
  rel,
  disabled = false,
  loading = false,
  variant = 'default',
  children,
  rounded = 'md',
  size = 'md',
  type = 'button',
  icon,
  iconPosition = 'left',
  ariaLabel,
  className,
  underlineHover = false,
}) => {
  const baseClasses = classNames(
    'btn',
    variantClasses[variant],
    sizeClasses[size],
    roundedClasses[rounded],
    className,
    underlineHover && 'hover:underline'
  );

  const content = loading ? (
    <div className="flex items-center">
      <div className="btn-loading" />
      <span>Loading...</span>
    </div>
  ) : (
    <div className="flex items-center">
      {icon &&
        iconPosition === 'left' &&
        React.cloneElement(icon, { className: 'mr-2 h-4 w-4' })}
      {children}
      {icon &&
        iconPosition === 'right' &&
        React.cloneElement(icon, { className: 'ml-2 h-4 w-4' })}
    </div>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        className={classNames(
          baseClasses,
          disabled && 'pointer-events-none opacity-50'
        )}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      aria-label={
        ariaLabel || (typeof children === 'string' ? children : undefined)
      }
      className={baseClasses}
    >
      {content}
    </button>
  );
};

export default Button;
