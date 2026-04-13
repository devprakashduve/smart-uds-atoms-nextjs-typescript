import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DashboardTemplate from './index';

const meta: Meta<typeof DashboardTemplate> = {
  title: 'Components/Templates/DashboardTemplate',
  component: DashboardTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DashboardTemplate>;

const SidebarContent = () => (
  <nav className="space-y-1">
    {['Dashboard', 'Analytics', 'Users', 'Orders', 'Settings'].map((item) => (
      <a
        key={item}
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        <span className="h-5 w-5 flex-shrink-0 rounded bg-gray-300" />
        {item}
      </a>
    ))}
  </nav>
);

const TopbarContent = () => (
  <div className="flex w-full items-center justify-between">
    <span className="text-lg font-bold text-gray-800">MyApp</span>
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">Welcome, Admin</span>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
        A
      </div>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    topbar: <TopbarContent />,
    sidebar: <SidebarContent />,
    pageHeader: (
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-0.5 text-sm text-gray-500">
            Welcome back, here&apos;s what&apos;s happening.
          </p>
        </div>
        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
          New Report
        </button>
      </div>
    ),
    children: (
      <div className="space-y-6">
        {/* Stats row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Revenue', value: '$48,295', change: '+12%' },
            { label: 'Active Users', value: '3,842', change: '+5%' },
            { label: 'New Orders', value: '284', change: '+8%' },
            { label: 'Conversion', value: '3.6%', change: '-1%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p
                className={`mt-1 text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}
              >
                {stat.change} vs last month
              </p>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-4 text-base font-semibold text-gray-900">
              Recent Activity
            </h2>
            <div className="space-y-3">
              {[
                'Order #1042 placed',
                'User Jane Doe signed up',
                'Invoice #881 paid',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900">
              Quick Actions
            </h2>
            <div className="space-y-2">
              {['Create User', 'Generate Report', 'Export Data'].map(
                (action) => (
                  <button
                    key={action}
                    className="w-full rounded-lg bg-gray-50 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {action}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    footer: <span>© 2026 MyApp — Admin Panel</span>,
  },
};

export const NoSidebar: Story = {
  args: {
    topbar: <TopbarContent />,
    pageHeader: (
      <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
    ),
    children: (
      <div className="max-w-2xl rounded-xl border border-gray-200 bg-white p-8">
        <p className="text-gray-600">Settings content goes here.</p>
      </div>
    ),
  },
};

export const CollapsedSidebar: Story = {
  args: {
    ...Default.args,
    sidebarCollapsed: true,
  },
};
