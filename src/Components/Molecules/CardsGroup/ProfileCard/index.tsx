import Avatar from '@/Components/Atoms/Avatar';
import Img from '@/Components/Atoms/Img';
import React from 'react';

interface ProfileCardProps {
  coverImage: string;
  profileImage: string;
  name: string;
  title: string;
  height?: number;
}

export default function ProfileCard({
  coverImage,
  profileImage,
  name,
  title,
  height = 36,
}: ProfileCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
      <Img src={coverImage} alt="Cover" className={`w-full h-${height}`} />
      <div className="-mt-10 flex justify-center">
        <Avatar
          alt="Profile"
          circle
          className="border-4 border-white object-cover shadow-lg"
          initials="CD"
          size={20}
          status="online"
          src={profileImage}
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
}
