import React from 'react';
import UDSImage from '../../../../Components/Atoms/Image';
import { HeroBannerImageContentProps } from './HeroBannerImageContent.interface';
import Button from '../../../../Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';

const HeroBannerImageContent: React.FC<HeroBannerImageContentProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  imageSrc,
  imageAlt,
  imagePosition = 'right', // Default to right
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="py-16">
      <div
        className={`container mx-auto flex flex-col-reverse items-center px-5 lg:flex-row lg:gap-12 ${
          isImageLeft ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Image Content */}
        <div className="w-full md:w-3/4 lg:w-1/2">
          <UDSImage
            className="w-full max-w-lg rounded-lg object-cover object-center shadow-lg"
            alt={imageAlt}
            src={imageSrc}
          />
        </div>

        {/* Text Content */}
        <div className="flex w-full flex-col items-center text-center md:w-3/4 md:items-start md:text-left lg:w-1/2">
          {(title || subtitle) && (
            <h1 className="title-font mb-4 text-start text-3xl font-medium sm:text-4xl">
              {title}
              {subtitle && (
                <>
                  <br className="hidden lg:inline-block" />
                  {subtitle}
                </>
              )}
            </h1>
          )}
          {description && (
            <p className="mb-6 leading-relaxed text-gray-600">{description}</p>
          )}
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button
              variant="link"
              className="w-full sm:w-auto"
              href={primaryButtonLink}
            >
              {primaryButtonText}
            </Button>
            <Button
              variant="link"
              className="w-full sm:w-auto"
              href={secondaryButtonLink}
              icon={
                <Icon name="chevronRight" variant="outline" className="ml-2" />
              }
              iconPosition="right"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerImageContent;
