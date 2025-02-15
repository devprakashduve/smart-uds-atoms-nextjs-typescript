import React, { useState } from 'react';
import { ReviewSectionProps, Review } from './ReviewSectionProps.interface';
import './ReviewSection.css';

const ReviewSection: React.FC<ReviewSectionProps> = ({
  reviews,
  onSubmitReview,
}) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = () => {
    if (name && reviewText) {
      const newReview: Review = { name, rating, reviewText };
      onSubmitReview(newReview);
      setName('');
      setRating(1);
      setReviewText('');
    }
  };

  return (
    <div className="review-section rounded-lg bg-gray-100 p-6">
      <h2 className="mb-4 text-2xl font-semibold">Customer Reviews</h2>

      {/* Display Reviews */}
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review-item mb-4 rounded-lg bg-white p-4 shadow-md"
          >
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <div className="rating text-yellow-500">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <p className="mt-2 text-gray-700">{review.reviewText}</p>
          </div>
        ))}
      </div>

      {/* Review Submission Form */}
      <div className="review-form mt-6 rounded-lg bg-white p-4 shadow-md">
        <h3 className="mb-4 text-xl font-semibold">Write a Review</h3>
        <input
          type="text"
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="rating mb-4">
          <label className="mr-2">Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
          placeholder="Your Review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
