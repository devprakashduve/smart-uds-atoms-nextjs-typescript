import React from 'react';
import { UserProfileTemplateProps } from './UserProfileTemplateProps.interface';
import './UserProfileTemplate.css';

const UserProfileTemplate: React.FC<UserProfileTemplateProps> = ({
  userName,
  userEmail,
  userAvatar,
  bio,
  activities,
  children,
}) => {
  return (
    <div className="user-profile-template flex h-auto flex-col bg-gray-50 md:flex-row">
      {/* Sidebar with User Activities or Additional Sections */}
      {activities && (
        <div className="sidebar w-full bg-gray-800 p-4 text-white md:w-64">
          <h2 className="text-xl font-semibold">{userName}'s Activities</h2>
          <div className="activities mt-4">{activities}</div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="main-content flex-1 p-6">
        <header className="mb-8 flex items-center">
          <img
            src={userAvatar}
            alt={userName}
            className="mr-4 h-16 w-16 rounded-full"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">{userName}</h1>
            <p className="text-lg text-gray-600">{userEmail}</p>
            {bio && <p className="mt-2 text-sm text-gray-500">{bio}</p>}
          </div>
        </header>
        <div className="content mt-6">{children}</div>
      </div>
    </div>
  );
};

export default UserProfileTemplate;
