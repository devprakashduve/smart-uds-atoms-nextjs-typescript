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
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {header && (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
          {header}
        </header>
      )}

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-indigo-50 to-white px-4 py-20 text-center">
          {title && (
            <div className="mx-auto max-w-3xl">
              <div className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                {title}
              </div>
              {subtitle && (
                <div className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
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
        <section className="animate-fadeIn mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans}
          </div>
        </section>

        {/* CTA banner */}
        {cta && (
          <section className="bg-indigo-600 px-4 py-12 text-center text-white">
            <div className="mx-auto max-w-3xl">{cta}</div>
          </section>
        )}

        {/* FAQ */}
        {faq && (
          <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            {faq}
          </section>
        )}
      </main>

      {footer && (
        <footer className="border-t border-gray-200 bg-gray-50">
          {footer}
        </footer>
      )}
    </div>
  );
};

export default PricingTemplate;
