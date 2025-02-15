import { useState } from 'react';
import Icon from '@/Components/Atoms/Icon';
import Button from '@/Components/Atoms/Button';
import Typography from '@/Components/Atoms/Typography';
import { InfoBannerProps } from './InfoBanners.interface';
import Img from '@/Components/Atoms/Img';

export default function InfoBanner({
  title,
  subtitle,
  imageUrl,
  linkUrl,
  altText,
  className = '',
  onDismiss,
}: InfoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`relative isolate flex items-center gap-x-6 overflow-hidden bg-primary px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${className}`}
    >
      {/* Background elements */}
      <div aria-hidden="true" className="banner-bg-gradient-left" />
      <div aria-hidden="true" className="banner-bg-gradient-right" />

      {/* Content */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {imageUrl && (
          <div className="flex items-center">
            <Img
              src={imageUrl}
              alt={altText}
              className="h-8 w-8 rounded-full object-cover"
              width={32}
              height={32}
            />
          </div>
        )}

        <div className="flex flex-col gap-1">
          <Typography
            variant="body"
            size="sm"
            weight="medium"
            className="text-letter-drk"
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body" size="xs" className="text-letter-drk/80">
              {subtitle}
            </Typography>
          )}
        </div>

        <Button
          href={linkUrl}
          rounded="full"
          className="shadow-xs transition-transform hover:scale-105"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </Button>
      </div>

      {/* Dismiss button */}
      <div className="flex flex-1 justify-end">
        <Button
          type="button"
          variant="icon"
          aria-label="Dismiss banner"
          onClick={handleDismiss}
        >
          <Icon
            name="close"
            className="text-letter-light"
            variant={'outline'}
          />
        </Button>
      </div>
    </div>
  );
}
