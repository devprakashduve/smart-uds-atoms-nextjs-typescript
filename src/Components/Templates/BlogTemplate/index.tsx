import React from 'react';
import { BlogTemplateProps } from './BlogTemplate.interface';

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  header,
  megaMenu,
  featuredPost,
  posts,
  sidebar,
  footer,
}) => {
  const headerContent = header ?? megaMenu;
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      {/* Header / MegaMenu */}
      {headerContent && (
        <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {headerContent}
          </div>
        </header>
      )}

      <main className="animate-fadeIn mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {featuredPost && <div className="mb-16">{featuredPost}</div>}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">{posts}</div>

          {sidebar && (
            <aside className="hidden space-y-8 border-l border-gray-100 pl-8 lg:col-span-4 lg:block">
              <div className="sticky top-28 space-y-8">{sidebar}</div>
            </aside>
          )}
        </div>
      </main>

      {footer && (
        <footer className="mt-20 border-t border-gray-200 bg-gray-50">
          {footer}
        </footer>
      )}
    </div>
  );
};

export default BlogTemplate;
