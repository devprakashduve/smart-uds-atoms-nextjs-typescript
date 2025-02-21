export interface RatingProps {
  rating: number; // Current rating value
  maxRating?: number; // Maximum rating value (default: 5)
  onRatingChange?: (rating: number) => void; // Function triggered when the rating is changed
  isInteractive?: boolean; // Determines if the component is clickable (default: false)
  className?: string; // Optional additional className for the container
}
