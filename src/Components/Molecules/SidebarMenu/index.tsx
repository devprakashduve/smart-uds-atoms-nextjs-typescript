import React, { useState } from 'react';
import { SidebarMenuProps, MenuItem } from './SidebarMenuProps.interface';
import './SidebarMenu.css';

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isCollapsed = false,
  onMenuItemClick,
  className,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.subMenu) {
      setActiveItem((prev) => (prev === item.label ? null : item.label));
    }
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }
  };

  return (
    <nav
      className={`sidebar-menu ${isCollapsed ? 'collapsed' : ''} ${className || ''}`}
    >
      <ul className="menu-list">
        {items.map((item) => (
          <li key={item.label} className="menu-item">
            <div
              className={`menu-item-header ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => handleMenuItemClick(item)}
            >
              {item.icon && <span className="menu-icon">{item.icon}</span>}
              {!isCollapsed && <span className="menu-label">{item.label}</span>}
              {item.subMenu && !isCollapsed && (
                <span className="menu-arrow">▶</span>
              )}
            </div>
            {item.subMenu && activeItem === item.label && !isCollapsed && (
              <ul className="submenu-list">
                {item.subMenu.map((subItem) => (
                  <li
                    key={subItem.label}
                    className="submenu-item"
                    onClick={() => onMenuItemClick?.(subItem)}
                  >
                    {subItem.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
