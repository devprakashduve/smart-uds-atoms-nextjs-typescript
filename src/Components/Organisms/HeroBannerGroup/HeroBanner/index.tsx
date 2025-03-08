import React, { useState, useEffect } from 'react';
import { HeroBannerProps } from './HeroBanner.interface';
import Icon from '../../../../Components/Atoms/Icon';
import Button from '../../../../Components/Atoms/Button';

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImages = [],
  showOverlay = false,
  overlayColor = 'white',
  overlayOpacity = 0.5,
  autoSlide = false,
  slideInterval = 5000,
  minHeight = '600px',
  textAlign = 'center',
  verticalAlign = 'center',
  textBackgroundColor = 'rgba(255, 255, 255, 0.5)',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (autoSlide && backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
      }, slideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, backgroundImages.length, slideInterval]);

  const textAlignment = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end',
  }[textAlign];

  const verticalAlignment = {
    top: 'items-start',
    center: 'items-center',
    bottom: 'items-end',
  }[verticalAlign];

  return (
    <div
      className={`relative flex w-full ${verticalAlignment} ${textAlignment} p-6 transition-all duration-1000 sm:p-12`}
      style={{ minHeight }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImages.length
            ? `url(${backgroundImages[currentImageIndex]})`
            : 'none',
        }}
      />
      {/* Overlay */}
      {showOverlay && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}
      {/* Text Content with Background */}
      <div
        className="relative z-10 w-full max-w-3xl rounded-lg p-6 text-white"
        style={{
          backgroundColor: textBackgroundColor, // Background for text
        }}
      >
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mb-6 text-base sm:text-lg md:text-xl">{subtitle}</p>
        )}
        {buttonText && buttonLink && (
          <Button
            variant="link"
            icon={<Icon name="arrowRight" variant="outline" />}
            href={buttonLink}
            iconPosition="right"
            className="px-4 py-2 text-sm transition duration-300 sm:text-base"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
