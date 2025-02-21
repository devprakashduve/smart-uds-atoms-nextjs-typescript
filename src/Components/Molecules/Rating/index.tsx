import React from 'react';
import { RatingProps } from './RatingProps.interface';
import Button from '@/Components/Atoms/Button';

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

  return (
    <div className={`flex items-center ${className || ''}`}>
      {Array.from({ length: maxRating }, (_, index) => (
        <Button
          key={index}
          className={`cursor-default text-xl text-atom-rating-dark ${index < rating ? 'text-atom-rating-light' : ''} ${isInteractive ? 'cursor-pointer hover:text-atom-rating' : ''}`}
          onClick={() => handleRatingClick(index)}
          variant="icon"
        >
          ★
        </Button>
      ))}
    </div>
  );
};

export default Rating;
