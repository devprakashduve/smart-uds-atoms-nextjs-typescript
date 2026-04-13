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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <span className="text-xl font-extrabold tracking-tight text-indigo-700">
          Launchify
        </span>
        <nav className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#" className="hover:text-indigo-600">
            Features
          </a>
          <a href="#" className="hover:text-indigo-600">
            Pricing
          </a>
          <a href="#" className="hover:text-indigo-600">
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600"
          >
            Log in
          </a>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
            Get started free
          </button>
        </div>
      </div>
    ),

    hero: (
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 px-4 py-28 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-200">
            Now in public beta
          </span>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-6xl">
            Ship faster with
            <br />
            <span className="text-violet-300">the modern stack</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-indigo-200">
            Launchify gives your team the tools to build, test, and deploy
            production-ready apps in record time.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 hover:bg-indigo-50">
              Start for free
            </button>
            <button className="rounded-xl border border-indigo-400 px-8 py-4 text-lg font-bold text-white hover:bg-indigo-800">
              Watch demo
            </button>
          </div>
          <p className="mt-6 text-sm text-indigo-400">
            No credit card required · Free plan available
          </p>
        </div>
      </div>
    ),

    features: (
      <div>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Everything you need to launch
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            From prototyping to production — all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: '⚡',
              title: 'Blazing fast',
              desc: 'Built on edge infrastructure for sub-10ms response times worldwide.',
            },
            {
              icon: '🔒',
              title: 'Secure by default',
              desc: 'End-to-end encryption, SOC 2 compliant, and role-based access control.',
            },
            {
              icon: '📊',
              title: 'Built-in analytics',
              desc: 'Real-time dashboards without third-party integrations or extra costs.',
            },
            {
              icon: '🔄',
              title: 'CI/CD pipelines',
              desc: 'Automated deployments on every push with zero-downtime rollbacks.',
            },
            {
              icon: '🧩',
              title: 'Modular by design',
              desc: 'Compose features from a growing library of drop-in building blocks.',
            },
            {
              icon: '🌍',
              title: 'Global CDN',
              desc: 'Serve your content from 200+ edge locations with automatic failover.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-3xl">{icon}</div>
              <h3 className="mb-2 font-bold text-gray-900">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),

    testimonials: (
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Loved by developers
          </h2>
          <p className="mt-3 text-gray-500">
            Join 10,000+ teams already shipping faster.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: 'Sarah K.',
              role: 'Lead Engineer @ Stripe',
              quote:
                'Launchify cut our deploy time in half. The DX is unmatched.',
            },
            {
              name: 'Marcus T.',
              role: 'CTO @ Notion',
              quote:
                "We migrated our entire infra in a weekend. Couldn't be happier.",
            },
            {
              name: 'Priya R.',
              role: 'Founder @ Linear',
              quote:
                'The built-in analytics alone are worth the switch. Incredible product.',
            },
          ].map(({ name, role, quote }) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <p className="mb-6 italic text-gray-700">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">
                  {name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{name}</p>
                  <p className="text-xs text-gray-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    cta: (
      <div>
        <h2 className="mb-4 text-4xl font-extrabold">Ready to ship faster?</h2>
        <p className="mb-8 text-lg text-indigo-200">
          Start your free trial today. No credit card required.
        </p>
        <button className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 hover:bg-indigo-50">
          Get started — it&apos;s free
        </button>
      </div>
    ),

    footer: (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            {
              heading: 'Product',
              links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
            },
            {
              heading: 'Company',
              links: ['About', 'Blog', 'Careers', 'Press'],
            },
            {
              heading: 'Resources',
              links: ['Docs', 'API Reference', 'Status', 'Support'],
            },
            {
              heading: 'Legal',
              links: ['Privacy', 'Terms', 'Cookies', 'Security'],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="mb-3 text-sm font-semibold text-white">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2026 Launchify, Inc. All rights reserved.
        </div>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    hero: (
      <div className="bg-gray-900 px-4 py-24 text-center text-white">
        <h1 className="text-4xl font-extrabold">Build something great.</h1>
        <p className="mt-4 text-gray-400">Start your journey today.</p>
        <button className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-700">
          Get started
        </button>
      </div>
    ),
    cta: (
      <div>
        <h2 className="mb-4 text-3xl font-bold">Ready to start?</h2>
        <button className="rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 hover:bg-indigo-50">
          Sign up free
        </button>
      </div>
    ),
  },
};
