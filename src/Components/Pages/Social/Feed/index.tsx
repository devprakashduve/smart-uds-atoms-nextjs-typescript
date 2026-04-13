'use client';

import React from 'react';
import SocialMediaTemplate from '../../../Templates/SocialMediaTemplate';
import Sidebar from '../../../Organisms/Sidebar';
import Button from '../../../Atoms/Button';
import Icon from '../../../Atoms/Icon';
import Avatar from '../../../Atoms/Avatar';
import TextArea from '../../../Atoms/InputGroup/TextArea';

import SocialPostCard from '../../../Molecules/CardsGroup/SocialPostCard';
import MiniFooter from '../../../Organisms/FooterGroup/MiniFooter';
import MegaMenu from '../../../Organisms/NavBarGroup/MegaMenu';
import ToastNotification from '../../../Molecules/ToastNotification';

// Mock data
const posts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    initials: 'SJ',
    handle: '@sarahj',
    content:
      'Just launched my new portfolio website! Check it out and let me know what you think 🚀',
    timestamp: '2h ago',
    likes: 42,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    author: 'Mike Chen',
    initials: 'MC',
    handle: '@mikechen',
    content:
      'Working on a new design system. The atomic design approach is really helping with scalability!',
    timestamp: '4h ago',
    likes: 128,
    comments: 15,
    shares: 12,
  },
  {
    id: 3,
    author: 'Emma Davis',
    initials: 'ED',
    handle: '@emmad',
    content:
      'Anyone else excited about the new React features? The performance improvements are incredible! 💯',
    timestamp: '6h ago',
    likes: 89,
    comments: 23,
    shares: 7,
  },
];

const suggestions = [
  { name: 'Alex Turner', initials: 'AT', handle: '@alexturner', mutual: 12 },
  { name: 'Lisa Wang', initials: 'LW', handle: '@lisawang', mutual: 8 },
  { name: 'James Brown', initials: 'JB', handle: '@jamesbrown', mutual: 15 },
];

const initialTrending = [
  { tag: '#WebDevelopment', posts: '12.5K' },
  { tag: '#ReactJS', posts: '8.3K' },
  { tag: '#TypeScript', posts: '6.7K' },
  { tag: '#DesignSystems', posts: '4.2K' },
];
const SOCIAL_NAVIGATION_DATA = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'explore', label: 'Explore', href: '#' },
  { id: 'messages', label: 'Messages', href: '#' },
  { id: 'notifications', label: 'Notifications', href: '#' },
];

const SocialMediaPage: React.FC = () => {
  const [feedPosts, setFeedPosts] = React.useState(posts);
  const [followSuggestions, setFollowSuggestions] = React.useState(suggestions);
  const [newPostText, setNewPostText] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  const [toastMsg, setToastMsg] = React.useState('');

  const searchSuggestions = React.useMemo(
    () =>
      feedPosts.map((p) => ({ name: p.content.substring(0, 50), href: '#' })),
    [feedPosts]
  );

  const handlePostCreate = () => {
    if (!newPostText.trim()) return;
    const newPost = {
      id: Date.now(),
      author: 'Current User',
      initials: 'CU',
      handle: '@currentuser',
      content: newPostText,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      shares: 0,
    };
    setFeedPosts([newPost, ...feedPosts]);
    setNewPostText('');
    setToastMsg('Post created successfully!');
    setShowToast(true);
  };

  const _handleLike = (id: number) => {
    setFeedPosts(
      feedPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleFollow = (handle: string) => {
    setFollowSuggestions(followSuggestions.filter((s) => s.handle !== handle));
    setToastMsg(`Following ${handle}`);
    setShowToast(true);
  };

  const filteredPosts = feedPosts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SocialMediaTemplate
        megaMenu={
          <MegaMenu
            menuData={SOCIAL_NAVIGATION_DATA}
            logoNode={
              <h1 className="text-2xl font-bold text-blue-600">SocialHub</h1>
            }
            showSearch={true}
            searchValue={searchQuery}
            onSearchChange={(val) => setSearchQuery(val)}
            searchPlaceholder="Search posts..."
            searchData={searchSuggestions}
            isLoggedIn={true}
            onLogoutClick={() => console.log('logout')}
          />
        }
        leftSidebar={
          <Sidebar
            items={[
              { id: 1, label: 'Home', href: '/social', iconName: 'home' },
              {
                id: 2,
                label: 'Profile',
                href: '/social/profile',
                iconName: 'user',
              },
              {
                id: 3,
                label: 'Messages',
                href: '/social/messages',
                iconName: 'envelop',
              },
              {
                id: 4,
                label: 'Notifications',
                href: '/social/notifications',
                iconName: 'bell',
              },
              {
                id: 5,
                label: 'Settings',
                href: '/social/settings',
                iconName: 'cog',
              },
            ]}
            header={<h2 className="text-lg font-bold text-gray-900">Menu</h2>}
          />
        }
        feed={
          <div className="space-y-4">
            {/* Create Post */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex gap-3">
                <Avatar initials="CU" size="md" />
                <div className="flex-1">
                  <TextArea
                    name="post"
                    placeholder="What's on your mind?"
                    rows={3}
                    className="mb-3 w-full"
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="rounded-full p-2 hover:bg-gray-100">
                        <Icon name="plus" className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                    <Button
                      variant="default"
                      size="md"
                      onClick={handlePostCreate}
                    >
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            {filteredPosts.map((post) => {
              const avatars: Record<string, string> = {
                'Sarah Johnson':
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
                'Mike Chen':
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
                'Emma Davis':
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
                'Current User':
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
              };
              return (
                <SocialPostCard
                  key={post.id}
                  user={{
                    name: post.author,
                    avatar:
                      avatars[post.author] ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random`,
                  }}
                  timeAgo={post.timestamp}
                  content={post.content}
                  likes={post.likes}
                  comments={post.comments}
                />
              );
            })}

            <div className="flex justify-center py-4">
              <Button variant="outline" size="lg">
                Load More Posts
              </Button>
            </div>
          </div>
        }
        rightSidebar={
          <div className="space-y-4">
            {/* Trending */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-4 font-bold text-gray-900">Trending Now</h3>
              <div className="space-y-3">
                {initialTrending.map((item) => (
                  <div
                    key={item.tag}
                    className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50"
                  >
                    <p className="font-semibold text-blue-600">{item.tag}</p>
                    <p className="text-sm text-gray-500">{item.posts} posts</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-4 font-bold text-gray-900">
                Suggested for You
              </h3>
              <div className="space-y-4">
                {followSuggestions.map((user) => (
                  <div
                    key={user.handle}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar initials={user.initials} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user.mutual} mutual connections
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleFollow(user.handle)}
                    >
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Links using MiniFooter */}
            <div className="px-2">
              <MiniFooter
                copyrightText="© 2026 SocialHub"
                links={[
                  { label: 'About', url: '/about' },
                  { label: 'Help', url: '/help' },
                  { label: 'Privacy', url: '/privacy' },
                  { label: 'Terms', url: '/terms' },
                ]}
              />
            </div>
          </div>
        }
        mobileNav={
          <div className="flex h-16 items-center justify-around">
            <Button
              variant="icon"
              className="flex flex-col items-center p-2"
              ariaLabel="Home"
            >
              <Icon name="home" className="h-6 w-6 text-blue-600" />
              <span className="mt-1 text-xs text-blue-600">Home</span>
            </Button>
            <Button
              variant="icon"
              className="flex flex-col items-center p-2"
              ariaLabel="Search"
            >
              <Icon name="search" className="h-6 w-6 text-gray-600" />
              <span className="mt-1 text-xs text-gray-600">Search</span>
            </Button>
            <Button
              variant="icon"
              className="flex flex-col items-center p-2"
              ariaLabel="Alerts"
            >
              <Icon name="bell" className="h-6 w-6 text-gray-600" />
              <span className="mt-1 text-xs text-gray-600">Alerts</span>
            </Button>
            <Button
              variant="icon"
              className="flex flex-col items-center p-2"
              ariaLabel="Profile"
            >
              <Icon name="user" className="h-6 w-6 text-gray-600" />
              <span className="mt-1 text-xs text-gray-600">Profile</span>
            </Button>
          </div>
        }
      />
      {showToast && (
        <div className="fixed bottom-10 right-10 z-50">
          <ToastNotification
            message={toastMsg}
            type="success"
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </>
  );
};

export default SocialMediaPage;
