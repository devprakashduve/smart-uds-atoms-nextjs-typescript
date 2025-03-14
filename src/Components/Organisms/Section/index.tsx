import React from 'react';
import { SectionProps } from './Section.interface';

const Section: React.FC<SectionProps> = ({
  heading,
  subheading,
  border = true,
  children,
  textAlign = 'center',
  className,
}) => {
  return (
    <section className={`${border && 'border-t border-gray-200'} ${className}`}>
      <div className="container mx-auto px-5 py-24">
        <div
          className={`mb-20 flex w-full flex-col flex-wrap items-${textAlign} text-${textAlign}`}
        >
          {heading && (
            <h2
              className={`title-font mb-2 text-2xl font-medium sm:text-3xl text-${textAlign}`}
            >
              {heading}
            </h2>
          )}
          {subheading && (
            <p className={`w-full text-base leading-relaxed text-${textAlign}`}>
              {subheading}
            </p>
          )}
        </div>
        <div className="-m-4 flex flex-wrap">{children}</div>
      </div>
    </section>
  );
};

export default Section;
