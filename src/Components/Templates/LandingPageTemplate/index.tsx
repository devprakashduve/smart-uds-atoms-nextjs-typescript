import React from 'react';
import { LandingPageTemplateProps } from './LandingPageTemplate.interface';

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  header,
  hero,
  features,
  testimonials,
  extraSections,
  cta,
  footer,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {header && (
        <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md">
          {header}
        </header>
      )}

      <main className="flex-1">
        {/* Hero */}
        {hero && <section className="animate-fadeIn w-full">{hero}</section>}

        {/* Features */}
        {features && (
          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            {features}
          </section>
        )}

        {/* Testimonials */}
        {testimonials && (
          <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {testimonials}
            </div>
          </section>
        )}

        {/* Extra sections */}
        {extraSections && <div>{extraSections}</div>}

        {/* CTA */}
        {cta && (
          <section className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-20 text-white">
            <div className="mx-auto max-w-3xl text-center">{cta}</div>
          </section>
        )}
      </main>

      {footer && (
        <footer className="bg-gray-900 text-gray-300">{footer}</footer>
      )}
    </div>
  );
};

export default LandingPageTemplate;
