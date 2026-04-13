import React from 'react';
import { SocialMediaTemplateProps } from './SocialMediaTemplate.interface';

const SocialMediaTemplate: React.FC<SocialMediaTemplateProps> = ({
  header,
  leftSidebar,
  feed,
  rightSidebar,
  megaMenu,
  mobileNav,
}) => {
  const headerContent = header ?? megaMenu;
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header / MegaMenu - Mobile & Desktop */}
      {headerContent && (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {headerContent}
          </div>
        </header>
      )}

      {/* Main Layout - Three Column */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-12">
          {/* Left Sidebar - Navigation */}
          {leftSidebar && (
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-20">{leftSidebar}</div>
            </aside>
          )}

          {/* Main Feed */}
          <main
            className={`${leftSidebar && rightSidebar ? 'lg:col-span-6' : leftSidebar || rightSidebar ? 'lg:col-span-9' : 'lg:col-span-12'} space-y-4`}
          >
            {feed}
          </main>

          {/* Right Sidebar - Suggestions/Trending */}
          {rightSidebar && (
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-20 space-y-4">{rightSidebar}</div>
            </aside>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {mobileNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white shadow-lg lg:hidden">
          {mobileNav}
        </nav>
      )}
    </div>
  );
};

export default SocialMediaTemplate;
