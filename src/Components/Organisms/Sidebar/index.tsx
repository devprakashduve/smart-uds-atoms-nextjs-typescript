import React, { useState } from 'react';
import { SidebarProps } from './Sidebar.interface';
import CustomLink from '../../Atoms/CustomLink';
import Icon from '../../Atoms/Icon';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Sidebar: React.FC<SidebarProps> = ({
  items,
  className = '',
  header,
  footer,
  isCollapsed: initialCollapsed = false,
  collapsible = true,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

  return (
    <aside
      className={classNames(
        'flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300 shadow-sm z-20',
        isCollapsed ? 'w-16 lg:w-20' : 'w-full lg:w-64',
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-100 h-16">
        {!isCollapsed && <div className="overflow-hidden">{header}</div>}
        {collapsible && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-md hover:bg-gray-100 text-gray-500 ml-auto focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
             <Icon name={isCollapsed ? "arrowRight" : "bars3"} className="w-6 h-6" />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-200">
        <ul className="space-y-1 px-3">
          {items.map((item) => (
            <li key={item.id}>
              <CustomLink
                href={item.href}
                className={classNames(
                  'flex items-center p-2 rounded-lg transition-colors duration-200 group w-full',
                  'hover:bg-gray-50 text-gray-700 hover:text-black',
                  isCollapsed ? 'justify-center' : ''
                )}
                underline={false}
                underlineHover={false}
              >
                {item.iconName && (
                  <Icon
                    name={item.iconName}
                    className={classNames(
                        'flex-shrink-0 w-6 h-6 transition-colors text-gray-500 group-hover:text-black',
                        isCollapsed ? '' : 'mr-3'
                    )}
                  />
                )}
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>

      {footer && (
        <div className={classNames("p-4 border-t border-gray-100", isCollapsed ? "text-center" : "")}>
           {footer}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
