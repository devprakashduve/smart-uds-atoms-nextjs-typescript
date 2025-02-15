export interface TestimonialCardProps {
  testimonial: string;
  imageSrc: string;
  name: string;
  position: string;
  alignment?: 'left' | 'right' | 'center';
  design: 'inline' | 'default';
}
