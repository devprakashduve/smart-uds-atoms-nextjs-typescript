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
  as: Component = 'span', // Default to 'span' if not provided
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

  return <Component className={classNames}>{children}</Component>;
};

export default Typography;
