import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PricingTemplate from './index';

const meta: Meta<typeof PricingTemplate> = {
  title: 'Components/Templates/PricingTemplate',
  component: PricingTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof PricingTemplate>;

const plans = [
  {
    name: 'Starter',
    price: { monthly: '$9', annual: '$7' },
    description: 'Perfect for individuals and small projects.',
    features: ['5 projects', '10 GB storage', 'Email support', 'API access'],
    highlighted: false,
    cta: 'Get started',
  },
  {
    name: 'Pro',
    price: { monthly: '$29', annual: '$23' },
    description: 'For growing teams that need more power.',
    features: ['Unlimited projects', '100 GB storage', 'Priority support', 'Advanced analytics', 'Custom domain'],
    highlighted: true,
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    price: { monthly: '$79', annual: '$63' },
    description: 'For large organisations with custom needs.',
    features: ['Everything in Pro', 'SSO & SAML', 'Dedicated support', 'SLA guarantee', 'Custom integrations'],
    highlighted: false,
    cta: 'Contact sales',
  },
];

const BillingToggle = () => {
  const [annual, setAnnual] = useState(false);
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
      <span className={annual ? 'text-gray-400' : ''}>Monthly</span>
      <button
        onClick={() => setAnnual((a) => !a)}
        className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-indigo-600' : 'bg-gray-300'}`}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${annual ? 'translate-x-6' : ''}`}
        />
      </button>
      <span className={annual ? '' : 'text-gray-400'}>
        Annual <span className="text-green-600 font-semibold">Save 20%</span>
      </span>
    </div>
  );
};

export const Default: Story = {
  args: {
    header: (
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold text-indigo-700">Acme SaaS</span>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
        </nav>
        <button className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Sign up free
        </button>
      </div>
    ),
    title: 'Simple, transparent pricing',
    subtitle: 'No hidden fees. Cancel anytime. Start with a 14-day free trial.',
    billingToggle: <BillingToggle />,
    plans: (
      <>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 flex flex-col gap-6 shadow-sm ${
              plan.highlighted
                ? 'border-indigo-500 ring-2 ring-indigo-500 bg-indigo-50 relative'
                : 'border-gray-200 bg-white'
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most popular
              </span>
            )}
            <div>
              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
            </div>
            <div>
              <span className="text-4xl font-extrabold text-gray-900">{plan.price.monthly}</span>
              <span className="text-gray-400 text-sm">/mo</span>
            </div>
            <ul className="space-y-2 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                plan.highlighted
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </>
    ),
    cta: (
      <div>
        <h2 className="text-2xl font-bold mb-2">Need a custom plan?</h2>
        <p className="text-indigo-100 mb-6">Talk to our sales team for volume discounts and custom integrations.</p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50">
          Contact sales
        </button>
      </div>
    ),
    faq: (
      <div className="space-y-4">
        {[
          { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade at any time from your account settings.' },
          { q: 'Is there a free trial?', a: 'All paid plans include a 14-day free trial. No credit card required.' },
          { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
        ].map(({ q, a }) => (
          <details key={q} className="border border-gray-200 rounded-xl p-5 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              {q}
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">{a}</p>
          </details>
        ))}
      </div>
    ),
    footer: (
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-400">
        © 2026 Acme SaaS. All rights reserved.
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: 'Choose your plan',
    plans: (
      <>
        {plans.map((plan) => (
          <div key={plan.name} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900">{plan.name}</h3>
            <p className="text-2xl font-extrabold mt-2">{plan.price.monthly}<span className="text-sm font-normal text-gray-400">/mo</span></p>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
              {plan.cta}
            </button>
          </div>
        ))}
      </>
    ),
  },
};
