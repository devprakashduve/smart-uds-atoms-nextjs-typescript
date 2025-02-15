import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DashboardTemplate from '.';
import { DashboardTemplateProps } from './DashboardTemplateProps.interface';

export default {
  title: 'Components/Templates/DashboardTemplate',
  component: DashboardTemplate,
} as Meta;

const Template: StoryFn<DashboardTemplateProps> = (args) => (
  <DashboardTemplate {...args} />
);

export const DefaultDashboardTemplate = Template.bind({});
DefaultDashboardTemplate.args = {
  title: 'Dashboard',
  description:
    'Welcome to your Dashboard! Manage your account, settings, and more.',
  sidebarContent: (
    <ul>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Overview
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Settings
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Reports
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Users
        </a>
      </li>
    </ul>
  ),
  children: (
    <div className="dashboard-main-content">
      <h2 className="text-2xl font-semibold text-gray-800">User Activity</h2>
      <p className="mt-4 text-gray-600">
        Recent activities from the users are displayed here.
      </p>
      {/* Insert your main content like tables, charts, or statistics here */}
    </div>
  ),
};
