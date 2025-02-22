export interface UserProfileTemplateProps {
  userName: string;
  userEmail: string;
  userAvatar: string;
  bio?: string;
  activities?: React.ReactNode; // Optional activities or other related content
  children: React.ReactNode; // Main content for the user profile
}
