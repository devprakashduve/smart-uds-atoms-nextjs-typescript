import { render, screen } from '@testing-library/react';
import SocialPostCard from './index';

const mockProps = {
  user: {
    name: 'Alex Johnson',
    avatar: '/images/avatar.jpg',
  },
  timeAgo: '2 hours ago',
  content: 'Just launched a new project! 🚀 Check it out at myportfolio.com.',
  likes: 120,
  comments: 45,
};

test('renders SocialPostCard with props', () => {
  render(<SocialPostCard {...mockProps} />);

  expect(screen.getByText(mockProps.user.name)).toBeInTheDocument();
  expect(screen.getByText(mockProps.timeAgo)).toBeInTheDocument();
  expect(screen.getByText(mockProps.content)).toBeInTheDocument();
  expect(screen.getByText(`👍 ${mockProps.likes} Likes`)).toBeInTheDocument();
  expect(
    screen.getByText(`💬 ${mockProps.comments} Comments`)
  ).toBeInTheDocument();
});

test('renders SocialPostCard with default props', () => {
  render(
    <SocialPostCard
      user={{ name: 'Anonymous', avatar: '/images/default-avatar.jpg' }}
      timeAgo="a moment ago"
      content="No content available."
      likes={0}
      comments={0}
    />
  );

  expect(screen.getByText('Anonymous')).toBeInTheDocument();
  expect(screen.getByText('a moment ago')).toBeInTheDocument();
  expect(screen.getByText('No content available.')).toBeInTheDocument();
  expect(screen.getByText('👍 0 Likes')).toBeInTheDocument();
  expect(screen.getByText('💬 0 Comments')).toBeInTheDocument();
});

test('renders SocialPostCard with no likes or comments', () => {
  render(
    <SocialPostCard
      user={{ name: 'Jane Doe', avatar: '/images/avatar.jpg' }}
      timeAgo="5 minutes ago"
      content="Excited to share my latest blog post!"
      likes={0}
      comments={0}
    />
  );

  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  expect(screen.getByText('5 minutes ago')).toBeInTheDocument();
  expect(
    screen.getByText('Excited to share my latest blog post!')
  ).toBeInTheDocument();
  expect(screen.getByText('👍 0 Likes')).toBeInTheDocument();
  expect(screen.getByText('💬 0 Comments')).toBeInTheDocument();
});
