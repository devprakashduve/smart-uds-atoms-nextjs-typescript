export interface TestimonialCardProps {
  testimonialText: string;
  imageSource: string;
  userName: string;
  userPosition: string;
  textAlignment?: 'left' | 'right' | 'center';
  cardDesign: 'inline' | 'default';
}
