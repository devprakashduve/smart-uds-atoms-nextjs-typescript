export interface HeroBannerImageContentProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonLink: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}
