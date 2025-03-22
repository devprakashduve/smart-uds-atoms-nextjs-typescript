import Avatar from '@/Components/Atoms/Avatar';
import UDSImage from '@/Components/Atoms/UDSImage';
import { ProfileCardProps } from './types';

export default function ProfileCard({
  coverImageUrl,
  profileImageUrl,
  userName,
  userTitle,
  imageHeight = 36,
}: ProfileCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-card bg-gradient-to-r from-atom-card-background to-atom-card-to_background shadow-lg">
      <UDSImage
        src={coverImageUrl}
        alt="Cover"
        className={`w-full h-${imageHeight}`}
      />
      <div className="-mt-10 flex justify-center">
        <Avatar
          alt="Profile"
          className="object-cover shadow-lg"
          initials={userName.charAt(0)}
          status="online"
          src={profileImageUrl}
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{userName}</h2>
        <p className="">{userTitle}</p>
      </div>
    </div>
  );
}
