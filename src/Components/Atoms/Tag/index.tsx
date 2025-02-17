import React from 'react';
import { TagProps } from './TagProps.interface';
import Button from '../Button';

const Tag: React.FC<TagProps> = ({ label, onClick, onRemove, icon }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div
      className={`bg-atom-tag-background inline-flex items-center rounded-full px-4 py-1 text-sm font-medium transition-colors ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
      onClick={onClick}
      onKeyDown={(e) => onClick && e.key === 'Enter' && onClick()}
    >
      {label}
      {icon && (
        <Button
          variant="icon"
          className={`text-atom-tag-text pr-0`}
          onClick={() => handleRemove}
        >
          {icon}
        </Button>
      )}
    </div>
  );
};

export default Tag;
