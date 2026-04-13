import React from 'react';
import { EcommerceTemplateProps } from './EcommerceTemplate.interface';

const EcommerceTemplate: React.FC<EcommerceTemplateProps> = ({
  logo,
  searchBar,
  cart,
  userMenu,
  navigation,
  hero,
  breadcrumb,
  filters,
  products,
  footer,
  megaMenu,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans">
      {/* MegaMenu Header Area */}
      {megaMenu || (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">
              <div className="flex min-w-0 items-center gap-2 sm:gap-8">
                <div className="flex-shrink-0">{logo}</div>
                <div className="hidden md:block">{navigation}</div>
              </div>

              <div className="hidden max-w-2xl flex-1 items-center justify-center md:flex">
                {searchBar}
              </div>

              <div className="flex flex-shrink-0 items-center space-x-2 sm:space-x-4">
                {userMenu}
                {cart}
              </div>
            </div>
            {/* Mobile Search - Visible only on small screens */}
            {searchBar && (
              <div className="border-t border-gray-100 py-3 md:hidden">
                {searchBar}
              </div>
            )}
          </div>
        </header>
      )}

      <main className="flex-1">
        {hero && <div className="w-full">{hero}</div>}

        <div className="animate-fadeIn mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {breadcrumb && <div className="mb-4">{breadcrumb}</div>}
          <div className="flex flex-col gap-8 lg:flex-row">
            {filters && (
              <aside className="w-full flex-shrink-0 lg:w-64">
                <div className="sticky top-24">{filters}</div>
              </aside>
            )}
            <div className="flex-1">{products}</div>
          </div>
        </div>
      </main>

      {footer && (
        <footer className="border-t border-gray-200 bg-white">{footer}</footer>
      )}
    </div>
  );
};

export default EcommerceTemplate;
