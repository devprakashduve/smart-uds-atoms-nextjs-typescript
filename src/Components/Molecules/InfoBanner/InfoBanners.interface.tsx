export interface InfoBannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  linkUrl: string;
  altText: string;
  className?: string;
  onDismiss?: () => void;
}
