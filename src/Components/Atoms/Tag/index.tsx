import React from 'react';
import { TagProps } from './TagProps.interface';
import Button from '../Button';

const colorMap = {
  'primary-light': 'bg-primary-light text-white',
  primary: 'bg-primary text-white',
  'primary-dark': 'bg-primary-dark text-white',
  'secondary-light': 'bg-secondary-light text-white',
  secondary: 'bg-secondary text-white',
  'secondary-dark': 'bg-secondary-dark text-white',
  'accent-light': 'bg-accent-light text-white',
  accent: 'bg-accent text-white',
  'accent-dark': 'bg-accent-dark text-white',
  error: 'bg-error text-white',
  warning: 'bg-warning text-white',
  info: 'bg-info text-white',
  success: 'bg-success text-white',
  neutral: 'bg-neutral text-white',
  'line-light': 'bg-line-light text-white',
  line: 'bg-line text-white',
  'line-dark': 'bg-line-dark text-white',
  'letter-light': 'bg-letter-light text-white',
  letter: 'bg-letter text-white',
  'letter-dark': 'bg-letter-dark text-white',
  'btn-light': 'bg-btn-light text-white',
  btn: 'bg-btn text-white',
  'btn-dark': 'bg-btn-dark text-white',
};

const Tag: React.FC<TagProps> = ({
  label,
  color = 'primary',
  onClick,
  removable = false,
  onRemove,
  icon,
}) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div
      className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-medium transition-colors ${
        colorMap[color]
      } ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
      onClick={onClick}
      onKeyDown={(e) => onClick && e.key === 'Enter' && onClick()}
    >
      {label}
      {icon && (
        <Button
          variant="icon"
          className={`text-line-light text-white`}
          onClick={() => handleRemove}
        >
          {icon}
        </Button>
      )}
    </div>
  );
};

export default Tag;
