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
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {headerContent}
          </div>
        </header>
      )}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
        {featuredPost && (
            <div className="mb-16">
                {featuredPost}
            </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
                {posts}
            </div>
            
            {sidebar && (
                <aside className="hidden lg:block lg:col-span-4 space-y-8 pl-8 border-l border-gray-100">
                     <div className="sticky top-28 space-y-8">
                        {sidebar}
                     </div>
                </aside>
            )}
        </div>
      </main>
      
      {footer && <footer className="bg-gray-50 border-t border-gray-200 mt-20">{footer}</footer>}
    </div>
  );
};

export default BlogTemplate;
