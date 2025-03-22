import { SocialPostCardProps } from './SocialPostCard.interface';
import UDSImage from '@/Components/Atoms/UDSImage';

export default function SocialPostCard({
  user,
  timeAgo,
  content,
  likes,
  comments,
}: SocialPostCardProps) {
  return (
    <div className="max-w-sm rounded-card bg-atom-card-background bg-gradient-to-r from-atom-card-background to-atom-card-to_background p-4">
      <div className="flex items-center">
        <UDSImage
          className="h-10 w-10 rounded-full"
          src={user.avatar}
          alt={user.name}
        />
        <div className="ml-3">
          <h4 className="font-semibold">{user.name}</h4>
          <p className="text-sm text-atom-card-dark/80">{timeAgo}</p>
        </div>
      </div>
      <p className="mt-2 text-atom-card-dark/90">{content}</p>
      <div className="mt-4 flex justify-between text-sm text-atom-card-dark">
        <span className="text-line-dark">👍 {likes} Likes</span>
        <span className="text-line-dark">💬 {comments} Comments</span>
      </div>
    </div>
  );
}
