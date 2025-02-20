import { SocialPostCardProps } from './SocialPostCard.interface';
import UDSImage from '@/Components/Atoms/Image';

export default function SocialPostCard({
  user,
  timeAgo,
  content,
  likes,
  comments,
}: SocialPostCardProps) {
  return (
    <div className="bg-atom-card-background from-atom-card-background to-atom-card-to_background rounded-card max-w-sm bg-gradient-to-r p-4">
      <div className="flex items-center">
        <UDSImage
          className="h-10 w-10 rounded-full"
          src={user.avatar}
          alt={user.name}
        />
        <div className="ml-3">
          <h4 className="font-semibold">{user.name}</h4>
          <p className="text-atom-card-dark/80 text-sm">{timeAgo}</p>
        </div>
      </div>
      <p className="text-atom-card-dark/90 mt-2">{content}</p>
      <div className="text-atom-card-dark mt-4 flex justify-between text-sm">
        <span className="text-line-dark">👍 {likes} Likes</span>
        <span className="text-line-dark">💬 {comments} Comments</span>
      </div>
    </div>
  );
}
