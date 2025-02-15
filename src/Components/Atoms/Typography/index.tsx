import React from 'react';
import { TypographyProps } from './TypographyProps.interface';

const variantSizeMap = {
  heading: '4xl',
  subheading: '2xl',
  body: 'base',
  caption: 'sm',
  overline: 'xs',
  button: 'lg',
};

const variantWeightMap = {
  heading: 'bold',
  subheading: 'medium',
  body: 'normal',
  caption: 'light',
  overline: 'light',
  button: 'bold',
};

const variantExtraClasses = {
  heading: '',
  subheading: '',
  body: '',
  caption: '',
  overline: 'uppercase',
  button: 'uppercase',
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  size,
  weight,
  color,
  align,
  className = '',
}) => {
  const sizeClass = size ? `text-${size}` : `text-${variantSizeMap[variant]}`;
  const weightClass = weight
    ? `font-${weight}`
    : `font-${variantWeightMap[variant]}`;
  const extraClasses = variantExtraClasses[variant];
  const alignClass = align ? `text-${align}` : '';

  const classNames = [
    sizeClass,
    weightClass,
    extraClasses,
    color && `text-${color}`,
    alignClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{children}</span>;
};

export default Typography;
