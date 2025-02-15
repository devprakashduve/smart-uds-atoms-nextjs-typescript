import React from 'react';
import { DashboardSideBarProps } from './DashboardSidebarProps.interface';
import './DashboardSidebar.css';

const DashboardSideBar: React.FC<DashboardSideBarProps> = ({
  navigationCustomLinks,
  logo,
  onCustomLinkClick,
}) => {
  return (
    <div className="dashboard-sidebar h-full w-64 bg-gray-800 text-white">
      <div className="logo p-6 text-center">
        <img src={logo} alt="Logo" className="mx-auto h-12" />
      </div>
      <nav className="navigation mt-8">
        <ul>
          {navigationCustomLinks.map((link, index) => (
            <li key={index} className="mb-4">
              <a
                href={link.url}
                className="flex items-center rounded-lg px-6 py-2 text-white hover:bg-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  if (onCustomLinkClick) onCustomLinkClick(link.url);
                }}
              >
                <span className="material-icons mr-4">{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSideBar;
