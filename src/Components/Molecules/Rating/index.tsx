import React from 'react';
import { RatingProps } from './RatingProps.interface';

const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  onRatingChange,
  isInteractive = false,
  className,
}) => {
  const handleRatingClick = (index: number) => {
    if (isInteractive && onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (!isInteractive) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(index + 1, maxRating - 1);
      onRatingChange?.(next + 1);
      (e.currentTarget.parentElement?.children[next] as HTMLElement)?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      const prev = Math.max(index - 1, 0);
      onRatingChange?.(prev + 1);
      (e.currentTarget.parentElement?.children[prev] as HTMLElement)?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleRatingClick(index);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Rating"
      className={`flex items-center ${className || ''}`}
    >
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isSelected = index < rating;
        return (
          <button
            key={index}
            type="button"
            aria-pressed={isInteractive ? isSelected : undefined}
            aria-label={`${starValue} ${starValue === 1 ? 'star' : 'stars'}`}
            tabIndex={isInteractive ? (index === 0 ? 0 : -1) : undefined}
            onClick={() => handleRatingClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`text-xl select-none bg-transparent border-none p-0
              ${isSelected ? 'text-atom-rating-light' : 'text-atom-rating-dark'}
              ${isInteractive ? 'cursor-pointer hover:text-atom-rating focus:outline-none focus:ring-1 focus:ring-atom-rating' : 'cursor-default'}
            `}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
