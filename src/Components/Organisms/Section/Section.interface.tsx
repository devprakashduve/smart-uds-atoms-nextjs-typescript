export interface SectionProps {
  heading: string;
  subheading: string;
  border: boolean;
  children: React.ReactNode;
  textAlign: 'left' | 'right' | 'center';
  className?: string;
}
