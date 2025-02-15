export interface SocialPostCardProps {
  user: {
    name: string;
    avatar: string;
  };
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
}
