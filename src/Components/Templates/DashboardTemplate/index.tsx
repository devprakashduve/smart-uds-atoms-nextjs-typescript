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
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans">
      {/* Topbar */}
      {topbar && (
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 shadow-sm">
          {sidebar && (
            <>
              {/* Desktop collapse toggle */}
              <button
                className="hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded text-gray-500 hover:bg-gray-100 lg:flex"
                onClick={() => setCollapsed((c) => !c)}
                aria-label="Toggle sidebar"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {/* Mobile open toggle */}
              <button
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded text-gray-500 hover:bg-gray-100 lg:hidden"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Open sidebar"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
              className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-gray-200 bg-white shadow-sm transition-all duration-300 lg:static ${collapsed ? 'lg:w-16' : 'lg:w-64'} ${mobileOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'} `}
            >
              <div
                className={`flex-1 overflow-y-auto overflow-x-hidden ${collapsed ? 'px-2 py-4' : 'p-4'}`}
              >
                {sidebar}
              </div>
            </aside>
          </>
        )}

        {/* Main area */}
        <div className="flex min-w-0 flex-1 flex-col overflow-auto">
          {pageHeader && (
            <div className="border-b border-gray-200 bg-white px-6 py-4">
              {pageHeader}
            </div>
          )}
          <main className="animate-fadeIn flex-1 px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          {footer && (
            <footer className="border-t border-gray-200 bg-white px-6 py-4 text-sm text-gray-500">
              {footer}
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
