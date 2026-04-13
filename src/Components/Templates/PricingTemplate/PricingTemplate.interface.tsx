import React from 'react';

export interface PricingTemplateProps {
  /** Top navigation slot */
  header?: React.ReactNode;
  /** Page title */
  title?: React.ReactNode;
  /** Page subtitle / description */
  subtitle?: React.ReactNode;
  /** Pricing plan cards rendered in a responsive grid */
  plans: React.ReactNode;
  /** Optional toggle between billing periods (e.g. Monthly / Annual) */
  billingToggle?: React.ReactNode;
  /** Optional FAQ section rendered below the plans */
  faq?: React.ReactNode;
  /** Optional CTA banner shown between plans and FAQ */
  cta?: React.ReactNode;
  /** Optional footer */
  footer?: React.ReactNode;
}
