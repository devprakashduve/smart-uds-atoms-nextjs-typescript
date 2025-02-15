import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Rating from '.';
import { RatingProps } from './RatingProps.interface';

export default {
  title: 'Components/Molecules/Rating',
  component: Rating,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<RatingProps> = (args) => {
  const [rating, setRating] = useState(args.rating);

  return (
    <Rating
      {...args}
      rating={rating}
      onRatingChange={(newRating) => {
        setRating(newRating);
        args.onRatingChange?.(newRating);
      }}
    />
  );
};

export const StaticRating = Template.bind({});
StaticRating.args = {
  rating: 3,
  maxRating: 5,
  isInteractive: false,
};

export const InteractiveRating = Template.bind({});
InteractiveRating.args = {
  rating: 4,
  maxRating: 5,
  isInteractive: true,
  onRatingChange: (rating) => console.log('New Rating:', rating),
};
