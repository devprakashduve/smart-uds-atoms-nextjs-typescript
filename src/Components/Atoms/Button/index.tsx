import React from 'react';
import { ButtonProps } from './ButtonProps.interface';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Button: React.FC<ButtonProps> = ({
  onClick,
  href,
  target,
  rel,
  disabled = false,
  loading = false,
  variant = 'default',
  children,
  size = 'md',
  type = 'button',
  icon,
  iconPosition = 'left',
  ariaLabel,
  className,
  underlineHover = false,
}) => {
  let extraClasses = '';
  switch (variant) {
    case 'default':
      extraClasses =
        'bg-atom-btn-dark/90 text-atom-btn-light hover:border hover:bg-atom-btn-dark focus:border';
      break;
    case 'outline':
      extraClasses = 'border border-atom-btn-dark bg-transparent';
      break;
    case 'pill-outline':
      extraClasses =
        'border border-atom-btn-dark bg-transparent text-atom-btn-dark hover:border-transparent';
      break;
    case 'three-d':
      extraClasses =
        'transform shadow-[0_4px_0_rgba(0,0,0,0.1)] active:translate-y-0.5';
      break;
    case 'elevated':
      extraClasses = 'shadow-lg transition-shadow hover:shadow-xl';
      break;
    case 'link':
      extraClasses =
        'bg-transparent text-atom-btn-dark underline-offset-4 shadow-none transition-all hover:bg-transparent hover:text-atom-btn-dark/80 hover:shadow-none focus:shadow-none active:shadow-none';
      break;
    case 'icon':
      extraClasses = 'p-2 hover:shadow-none !important';
      break;
    case 'disabled':
      extraClasses =
        'cursor-not-allowed bg-atom-btn-dark text-atom-btn-light opacity-50';
      break;
    case 'groups':
      extraClasses = 'border-r-0 last:border-r hover:relative hover:z-10';
      break;
  }
  const baseClasses = classNames(
    'inline-flex items-center text-atom-btn-dark hover:text-atom-btn rounded-button justify-center  hover:shadow focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
    extraClasses,
    `${size === 'xs' && 'py-1 px-2.5 text-xs'} 
   ${size === 'md' && 'py-2 px-4 text-sm'} 
   ${size === 'lg' && 'py-2.5 px-5 text-base'} 
   ${size === 'xl' && 'py-3.5 px-6 text-base'}`,
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
