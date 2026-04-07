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
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {headerContent}
          </div>
        </header>
      )}

      {/* Main Layout - Three Column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
          {/* Left Sidebar - Navigation */}
          {leftSidebar && (
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-20">
                {leftSidebar}
              </div>
            </aside>
          )}

          {/* Main Feed */}
          <main className={`${leftSidebar && rightSidebar ? 'lg:col-span-6' : leftSidebar || rightSidebar ? 'lg:col-span-9' : 'lg:col-span-12'} space-y-4`}>
            {feed}
          </main>

          {/* Right Sidebar - Suggestions/Trending */}
          {rightSidebar && (
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-20 space-y-4">
                {rightSidebar}
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {mobileNav && (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
          {mobileNav}
        </nav>
      )}
    </div>
  );
};

export default SocialMediaTemplate;
