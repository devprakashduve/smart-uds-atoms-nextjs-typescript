export interface SectionProps {
  topHeading?: string;
  heading: string;
  subheading: string;
  border: boolean;
  children: React.ReactNode;
  textAlign: 'left' | 'right' | 'center';
  className?: string;
}
