import React, { useState } from 'react';
import { AppHeaderProps } from './AppHeaderProps.interface';
import './AppHeader.css';
import UDSImage from '@/Components/Atoms/Image';

const AppHeader: React.FC<AppHeaderProps> = ({
  logo,
  navigationCustomLinks,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="app-header bg-blue-600 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <UDSImage src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Navigation CustomLinks */}
        <nav className="navigation">
          <ul className="flex space-x-6">
            {navigationCustomLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-white hover:text-blue-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar (Optional) */}
        {onSearch && (
          <form
            onSubmit={handleSearchSubmit}
            className="search-form flex items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="rounded-lg px-4 py-2"
              aria-label="Search"
            />
            <button type="submit" className="search-button ml-2 text-white">
              Search
            </button>
          </form>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
