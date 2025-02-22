import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ReviewSection from '.';
import { ReviewSectionProps } from './ReviewSectionProps.interface';

export default {
  title: 'Components/Organisms/ReviewSection',
  component: ReviewSection,
} as Meta;

const Template: StoryFn<ReviewSectionProps> = (args) => (
  <ReviewSection {...args} />
);

export const DefaultReviewSection = Template.bind({});
DefaultReviewSection.args = {
  reviews: [
    {
      name: 'John Doe',
      rating: 5,
      reviewText: 'This product is amazing! Highly recommend it.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      reviewText: 'Great product, but could use some improvements.',
    },
  ],
  onSubmitReview: (newReview) =>
    alert('New Review Submitted: ' + JSON.stringify(newReview)),
};
