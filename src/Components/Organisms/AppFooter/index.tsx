import React from 'react';
import { AppFooterProps } from './AppFooterProps.interface';
import './AppFooter.css';

const AppFooter: React.FC<AppFooterProps> = ({ copyrightText, links }) => {
  return (
    <footer className="app-footer bg-gray-800 py-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm">
          <p>{copyrightText}</p>
        </div>
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-sm hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
