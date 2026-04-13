import React from 'react';

export interface LandingPageTemplateProps {
  /** Top navigation slot */
  header?: React.ReactNode;
  /** Full-width hero section */
  hero?: React.ReactNode;
  /** Feature highlights section */
  features?: React.ReactNode;
  /** Social proof / testimonials section */
  testimonials?: React.ReactNode;
  /** Call-to-action section */
  cta?: React.ReactNode;
  /** Any additional sections rendered between testimonials and CTA */
  extraSections?: React.ReactNode;
  /** Optional footer */
  footer?: React.ReactNode;
}
