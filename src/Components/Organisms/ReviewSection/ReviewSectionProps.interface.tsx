export interface Review {
  name: string; // Reviewer's name
  rating: number; // Rating out of 5
  reviewText: string; // Review text
}

export interface ReviewSectionProps {
  reviews: Review[]; // List of reviews
  onSubmitReview: (newReview: Review) => void; // Function to handle new review submission
}
