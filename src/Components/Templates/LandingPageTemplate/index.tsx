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
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {header && (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          {header}
        </header>
      )}

      <main className="flex-1">
        {/* Hero */}
        {hero && <section className="w-full animate-fadeIn">{hero}</section>}

        {/* Features */}
        {features && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {features}
          </section>
        )}

        {/* Testimonials */}
        {testimonials && (
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {testimonials}
            </div>
          </section>
        )}

        {/* Extra sections */}
        {extraSections && <div>{extraSections}</div>}

        {/* CTA */}
        {cta && (
          <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">{cta}</div>
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
