import React, { useState } from 'react';
import { DashboardTemplateProps } from './DashboardTemplate.interface';

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  topbar,
  sidebar,
  sidebarCollapsed = false,
  children,
  pageHeader,
  footer,
}) => {
  const [collapsed, setCollapsed] = useState(sidebarCollapsed);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Topbar */}
      {topbar && (
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200 h-16 flex items-center px-4 gap-4">
          {sidebar && (
            <>
              {/* Desktop collapse toggle */}
              <button
                className="hidden lg:flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 text-gray-500 flex-shrink-0"
                onClick={() => setCollapsed((c) => !c)}
                aria-label="Toggle sidebar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {/* Mobile open toggle */}
              <button
                className="flex lg:hidden items-center justify-center w-8 h-8 rounded hover:bg-gray-100 text-gray-500 flex-shrink-0"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Open sidebar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </>
          )}
          <div className="flex-1">{topbar}</div>
        </header>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebar && (
          <>
            {/* Mobile overlay */}
            {mobileOpen && (
              <div
                className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                onClick={() => setMobileOpen(false)}
              />
            )}

            <aside
              className={`
                fixed lg:static inset-y-0 left-0 z-40
                flex flex-col bg-white border-r border-gray-200 shadow-sm
                transition-all duration-300
                ${collapsed ? 'lg:w-16' : 'lg:w-64'}
                ${mobileOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'}
              `}
            >
              <div className={`flex-1 overflow-y-auto overflow-x-hidden ${collapsed ? 'px-2 py-4' : 'p-4'}`}>
                {sidebar}
              </div>
            </aside>
          </>
        )}

        {/* Main area */}
        <div className="flex flex-col flex-1 min-w-0 overflow-auto">
          {pageHeader && (
            <div className="bg-white border-b border-gray-200 px-6 py-4">
              {pageHeader}
            </div>
          )}
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 animate-fadeIn">
            {children}
          </main>
          {footer && (
            <footer className="bg-white border-t border-gray-200 px-6 py-4 text-sm text-gray-500">
              {footer}
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
