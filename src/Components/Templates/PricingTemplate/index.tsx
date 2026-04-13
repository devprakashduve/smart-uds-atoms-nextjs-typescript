import React from 'react';
import { PricingTemplateProps } from './PricingTemplate.interface';

const PricingTemplate: React.FC<PricingTemplateProps> = ({
  header,
  title,
  subtitle,
  billingToggle,
  plans,
  cta,
  faq,
  footer,
}) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {header && (
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          {header}
        </header>
      )}

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4 text-center">
          {title && (
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                {title}
              </div>
              {subtitle && (
                <div className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                  {subtitle}
                </div>
              )}
              {billingToggle && (
                <div className="mt-8 flex justify-center">{billingToggle}</div>
              )}
            </div>
          )}
        </section>

        {/* Plans grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {plans}
          </div>
        </section>

        {/* CTA banner */}
        {cta && (
          <section className="bg-indigo-600 py-12 px-4 text-white text-center">
            <div className="max-w-3xl mx-auto">{cta}</div>
          </section>
        )}

        {/* FAQ */}
        {faq && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            {faq}
          </section>
        )}
      </main>

      {footer && (
        <footer className="bg-gray-50 border-t border-gray-200">{footer}</footer>
      )}
    </div>
  );
};

export default PricingTemplate;
