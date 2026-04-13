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
        'z-20 flex h-full flex-col border-r border-gray-200 bg-white shadow-sm transition-all duration-300',
        isCollapsed ? 'w-16 lg:w-20' : 'w-full lg:w-64',
        className
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-gray-100 p-4">
        {!isCollapsed && <div className="overflow-hidden">{header}</div>}
        {collapsible && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto rounded-md p-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <Icon
              name={isCollapsed ? 'arrowRight' : 'bars3'}
              className="h-6 w-6"
            />
          </button>
        )}
      </div>

      <nav className="scrollbar-thin scrollbar-thumb-gray-200 flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {items.map((item) => (
            <li key={item.id}>
              <CustomLink
                href={item.href}
                className={classNames(
                  'group flex w-full items-center rounded-lg p-2 transition-colors duration-200',
                  'text-gray-700 hover:bg-gray-50 hover:text-black',
                  isCollapsed ? 'justify-center' : ''
                )}
                underline={false}
                underlineHover={false}
              >
                {item.iconName && (
                  <Icon
                    name={item.iconName}
                    className={classNames(
                      'h-6 w-6 flex-shrink-0 text-gray-500 transition-colors group-hover:text-black',
                      isCollapsed ? '' : 'mr-3'
                    )}
                  />
                )}
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>

      {footer && (
        <div
          className={classNames(
            'border-t border-gray-100 p-4',
            isCollapsed ? 'text-center' : ''
          )}
        >
          {footer}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
