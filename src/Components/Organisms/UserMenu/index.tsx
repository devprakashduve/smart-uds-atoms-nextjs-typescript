import React, { useState } from 'react';
import { UserMenuProps } from './UserMenuProps.interface';
import './UserMenu.css';

const UserMenu: React.FC<UserMenuProps> = ({
  username,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-menu relative">
      <button onClick={toggleMenu} className="user-menu-btn">
        {username}
      </button>
      {isOpen && (
        <div className="user-menu-dropdown absolute right-0 mt-2 w-48 rounded border bg-white py-2 shadow-lg">
          <button onClick={onProfileClick} className="user-menu-item">
            Profile
          </button>
          <button onClick={onSettingsClick} className="user-menu-item">
            Settings
          </button>
          <button
            onClick={onLogoutClick}
            className="user-menu-item text-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
