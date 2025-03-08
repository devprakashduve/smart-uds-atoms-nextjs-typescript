export interface HeroBannerProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImages?: string[];
  showOverlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  autoSlide?: boolean;
  slideInterval?: number;
  minHeight?: string;
  textAlign?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'center' | 'bottom';
  textBackgroundColor?: string;
}
