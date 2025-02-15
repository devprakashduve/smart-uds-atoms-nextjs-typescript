import Img from '@/Components/Atoms/Img';
import { SocialPostCardProps } from './SocialPostCard.interface';

export default function SocialPostCard({
  user,
  timeAgo,
  content,
  likes,
  comments,
}: SocialPostCardProps) {
  return (
    <div className="bg-card-background max-w-sm rounded-lg p-4 shadow-lg">
      <div className="flex items-center">
        <Img
          className="h-10 w-10 rounded-full"
          src={user.avatar}
          alt={user.name}
        />
        <div className="ml-3">
          <h4 className="font-semibold">{user.name}</h4>
          <p className="text-card-dark/80 text-sm">{timeAgo}</p>
        </div>
      </div>
      <p className="text-card-dark/90 mt-2">{content}</p>
      <div className="text-card-dark mt-4 flex justify-between text-sm">
        <span className="text-line-dark">👍 {likes} Likes</span>
        <span className="text-line-dark">💬 {comments} Comments</span>
      </div>
    </div>
  );
}
