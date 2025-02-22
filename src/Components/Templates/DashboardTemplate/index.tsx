import React from 'react';
import { DashboardTemplateProps } from './DashboardTemplateProps.interface';
import './DashboardTemplate.css';

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  title,
  description,
  children,
  sidebarContent,
}) => {
  return (
    <div className="dashboard-template flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="sidebar w-64 bg-gray-800 p-4 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-400">{description}</p>
        <nav className="mt-6">{sidebarContent}</nav>
      </div>

      {/* Main content area */}
      <div className="main-content flex-1 overflow-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
          <p className="mt-2 text-lg text-gray-600">{description}</p>
        </header>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
