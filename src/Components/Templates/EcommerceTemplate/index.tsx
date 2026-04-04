import React from 'react';
import { EcommerceTemplateProps } from './EcommerceTemplate.interface';

const EcommerceTemplate: React.FC<EcommerceTemplateProps> = ({
  logo,
  searchBar,
  cart,
  userMenu,
  navigation,
  hero,
  filters,
  products,
  footer,
  megaMenu,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* MegaMenu Header Area */}
      {megaMenu || (
        <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-center h-16 gap-4">
                <div className="flex items-center gap-8">
                   {logo}
                   <div className="hidden md:block">{navigation}</div>
                </div>
                
                <div className="flex-1 max-w-2xl hidden md:flex items-center justify-center">
                   {searchBar}
                </div>
  
                <div className="flex items-center space-x-4">
                   {userMenu}
                   {cart}
                </div>
             </div>
             {/* Mobile Search - Visible only on small screens */}
             {searchBar && (
               <div className="md:hidden py-3 border-t border-gray-100">
                  {searchBar}
               </div>
             )}
          </div>
        </header>
      )}

      <main className="flex-1">
         {hero && <div className="w-full">{hero}</div>}
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
            <div className="flex flex-col lg:flex-row gap-8">
               {filters && (
                 <aside className="w-full lg:w-64 flex-shrink-0">
                    <div className="sticky top-24">
                        {filters}
                    </div>
                 </aside>
               )}
               <div className="flex-1">
                  {products}
               </div>
            </div>
         </div>
      </main>
      
      {footer && <footer className="bg-white border-t border-gray-200">{footer}</footer>}
    </div>
  );
}

export default EcommerceTemplate;
