import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LandingPageTemplate from './index';

const meta: Meta<typeof LandingPageTemplate> = {
  title: 'Components/Templates/LandingPageTemplate',
  component: LandingPageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LandingPageTemplate>;

export const Default: Story = {
  args: {
    header: (
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-extrabold text-indigo-700 tracking-tight">Launchify</span>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
          <a href="#" className="hover:text-indigo-600">Features</a>
          <a href="#" className="hover:text-indigo-600">Pricing</a>
          <a href="#" className="hover:text-indigo-600">Blog</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 font-medium">Log in</a>
          <button className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">
            Get started free
          </button>
        </div>
      </div>
    ),

    hero: (
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 text-white py-28 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-indigo-500/30 text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            Now in public beta
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Ship faster with<br />
            <span className="text-violet-300">the modern stack</span>
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-10">
            Launchify gives your team the tools to build, test, and deploy production-ready apps in record time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-indigo-50">
              Start for free
            </button>
            <button className="border border-indigo-400 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-indigo-800">
              Watch demo
            </button>
          </div>
          <p className="text-indigo-400 text-sm mt-6">No credit card required · Free plan available</p>
        </div>
      </div>
    ),

    features: (
      <div>
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900">Everything you need to launch</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From prototyping to production — all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '⚡', title: 'Blazing fast', desc: 'Built on edge infrastructure for sub-10ms response times worldwide.' },
            { icon: '🔒', title: 'Secure by default', desc: 'End-to-end encryption, SOC 2 compliant, and role-based access control.' },
            { icon: '📊', title: 'Built-in analytics', desc: 'Real-time dashboards without third-party integrations or extra costs.' },
            { icon: '🔄', title: 'CI/CD pipelines', desc: 'Automated deployments on every push with zero-downtime rollbacks.' },
            { icon: '🧩', title: 'Modular by design', desc: 'Compose features from a growing library of drop-in building blocks.' },
            { icon: '🌍', title: 'Global CDN', desc: 'Serve your content from 200+ edge locations with automatic failover.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),

    testimonials: (
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Loved by developers</h2>
          <p className="text-gray-500 mt-3">Join 10,000+ teams already shipping faster.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Sarah K.', role: 'Lead Engineer @ Stripe', quote: 'Launchify cut our deploy time in half. The DX is unmatched.' },
            { name: 'Marcus T.', role: 'CTO @ Notion', quote: 'We migrated our entire infra in a weekend. Couldn\'t be happier.' },
            { name: 'Priya R.', role: 'Founder @ Linear', quote: 'The built-in analytics alone are worth the switch. Incredible product.' },
          ].map(({ name, role, quote }) => (
            <div key={name} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
              <p className="text-gray-700 italic mb-6">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    cta: (
      <div>
        <h2 className="text-4xl font-extrabold mb-4">Ready to ship faster?</h2>
        <p className="text-indigo-200 text-lg mb-8">
          Start your free trial today. No credit card required.
        </p>
        <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-indigo-50">
          Get started — it&apos;s free
        </button>
      </div>
    ),

    footer: (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {[
            { heading: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
            { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
            { heading: 'Resources', links: ['Docs', 'API Reference', 'Status', 'Support'] },
            { heading: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'Security'] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-3">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © 2026 Launchify, Inc. All rights reserved.
        </div>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    hero: (
      <div className="py-24 px-4 text-center bg-gray-900 text-white">
        <h1 className="text-4xl font-extrabold">Build something great.</h1>
        <p className="mt-4 text-gray-400">Start your journey today.</p>
        <button className="mt-8 bg-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
          Get started
        </button>
      </div>
    ),
    cta: (
      <div>
        <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
        <button className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50">
          Sign up free
        </button>
      </div>
    ),
  },
};
