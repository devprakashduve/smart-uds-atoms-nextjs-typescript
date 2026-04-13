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
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 text-sm font-medium"
      >
        <span className="w-5 h-5 rounded bg-gray-300 flex-shrink-0" />
        {item}
      </a>
    ))}
  </nav>
);

const TopbarContent = () => (
  <div className="flex items-center justify-between w-full">
    <span className="text-lg font-bold text-gray-800">MyApp</span>
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">Welcome, Admin</span>
      <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">A</div>
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
          <p className="text-sm text-gray-500 mt-0.5">Welcome back, here&apos;s what&apos;s happening.</p>
        </div>
        <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700">
          New Report
        </button>
      </div>
    ),
    children: (
      <div className="space-y-6">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Revenue', value: '$48,295', change: '+12%' },
            { label: 'Active Users', value: '3,842', change: '+5%' },
            { label: 'New Orders', value: '284', change: '+8%' },
            { label: 'Conversion', value: '3.6%', change: '-1%' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <p className={`text-xs mt-1 font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                {stat.change} vs last month
              </p>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {['Order #1042 placed', 'User Jane Doe signed up', 'Invoice #881 paid'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              {['Create User', 'Generate Report', 'Export Data'].map((action) => (
                <button key={action} className="w-full text-left text-sm px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700">
                  {action}
                </button>
              ))}
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
      <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl">
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
