import React from 'react';
import { RatingProps } from './RatingProps.interface';
import './Rating.css';
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
    <div className={`rating-container ${className || ''}`}>
      {Array.from({ length: maxRating }, (_, index) => (
        <Button
          key={index}
          className={`rating-star ${index < rating ? 'filled' : ''} ${isInteractive ? 'interactive' : ''}`}
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
