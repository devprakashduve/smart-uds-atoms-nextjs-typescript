import React from 'react';
import { FAQTemplateProps } from './FAQTemplateProps.interface';
import './FAQTemplate.css';

const FAQTemplate: React.FC<FAQTemplateProps> = ({
  title,
  description,
  children,
  sidebarContent,
}) => {
  return (
    <div className="faq-template flex h-auto flex-col bg-gray-50 md:flex-row">
      {/* Sidebar (Optional) */}
      {sidebarContent && (
        <div className="sidebar w-full bg-gray-800 p-4 text-white md:w-64">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-400">{description}</p>
          <nav className="mt-6">{sidebarContent}</nav>
        </div>
      )}

      {/* Main Content Area */}
      <div className="main-content flex-1 p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
          <p className="mt-2 text-lg text-gray-600">{description}</p>
        </header>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default FAQTemplate;
