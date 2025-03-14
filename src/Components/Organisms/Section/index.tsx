import React from 'react';
import { SectionProps } from './Section.interface';
import Paragraph from '@/Components/Atoms/Paragraph';

const Section: React.FC<SectionProps> = ({
  heading,
  subheading,
  border = true,
  children,
  textAlign = 'center',
  className,
  topHeading,
}) => {
  return (
    <section className={`${border && 'border-t border-gray-200'} ${className}`}>
      <div className="container mx-auto px-5 py-24">
        {(heading || subheading) && (
          <div
            className={`mb-20 flex w-full flex-col flex-wrap items-${textAlign} text-${textAlign}`}
          >
            {topHeading && (
              <Paragraph
                className={`mb-2 text-${textAlign} font-semibold md:mb-3 lg:text-lg`}
              >
                {topHeading}
              </Paragraph>
            )}
            {heading && (
              <h2
                className={`title-font mb-2 text-2xl font-medium sm:text-3xl text-${textAlign}`}
                title={heading}
              >
                {heading}
              </h2>
            )}
            {subheading && (
              <Paragraph
                thin
                className={`w-full text-base leading-relaxed text-${textAlign}`}
              >
                {subheading}
              </Paragraph>
            )}
          </div>
        )}
        <div className="-m-4 flex flex-wrap">{children}</div>
      </div>
    </section>
  );
};

export default Section;
