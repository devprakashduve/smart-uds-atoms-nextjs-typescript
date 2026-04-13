'use client';

import React, { useState, useMemo } from 'react';
import BlogTemplate from '../../../Templates/BlogTemplate';
import Button from '../../../Atoms/Button';
import HeroBanner from '../../../Organisms/HeroBannerGroup/HeroBanner';
import Section from '../../../Organisms/Section';
import BlogPostCard from '../../../Molecules/CardsGroup/BlogPostCard';
import MegaMenu from '../../../Organisms/NavBarGroup/MegaMenu';
import FooterWithLinks from '../../../Organisms/FooterGroup/FooterWithLinks';

// Enhanced Mock blog data
const POSTS = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    excerpt:
      'Learn how to build modern web applications with the latest features in Next.js 14 including Server Components and Server Actions.',
    author: 'Jane Doe',
    initials: 'JD',
    date: 'Jan 5, 2026',
    readTime: '5 min read',
    category: 'Tutorial',
    image:
      'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: 2,
    title: 'Mastering TypeScript in 2026',
    excerpt:
      'Discover advanced TypeScript patterns and best practices for building scalable applications with the latest language features.',
    author: 'John Smith',
    initials: 'JS',
    date: 'Jan 4, 2026',
    readTime: '8 min read',
    category: 'Guide',
    image:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: 3,
    title: 'The Future of Web Development',
    excerpt:
      'Explore emerging trends and technologies shaping the future of web development, from AI to edge computing.',
    author: 'Sarah Johnson',
    initials: 'SJ',
    date: 'Jan 3, 2026',
    readTime: '6 min read',
    category: 'Opinion',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: 4,
    title: 'Effective CSS Architecture',
    excerpt:
      'Building maintainable and scalable CSS for large scale projects using modern tools and methodologies.',
    author: 'Alex Chen',
    initials: 'AC',
    date: 'Jan 2, 2026',
    readTime: '10 min read',
    category: 'Guide',
    image:
      'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: 5,
    title: 'React Performance Audit',
    excerpt:
      'How to identify and fix common performance bottlenecks in your React applications step by step.',
    author: 'Emma Davis',
    initials: 'ED',
    date: 'Jan 1, 2026',
    readTime: '12 min read',
    category: 'Tutorial',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: 6,
    title: 'State Management in 2026',
    excerpt:
      'A deep dive into the state management landscape and how to choose the right tool for your project.',
    author: 'Michael Brown',
    initials: 'MB',
    date: 'Dec 30, 2025',
    readTime: '7 min read',
    category: 'Review',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400',
  },
];

const CATEGORIES = ['All', 'Tutorial', 'Guide', 'Opinion', 'News', 'Review'];

// Added BLOG_FOOTER_DATA
const BLOG_FOOTER_DATA = {
  title: 'TechBlog.',
  description:
    'We are a community of passionate developers and designers dedicated to sharing knowledge and building a better web. Thoughtfully crafted for the modern developer.',
  links: [
    { text: 'Explore Articles', href: '#' },
    { text: 'Our Authors', href: '#' },
    { text: 'Newsletter Archive', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Help Center', href: '#' },
  ],
  socialLinks: [
    { iconName: 'twitter', href: '#', target: '_blank' as const },
    { iconName: 'linkedin', href: '#', target: '_blank' as const },
    { iconName: 'github', href: '#', target: '_blank' as const },
  ],
};

const BLOG_NAVIGATION_DATA = [
  { id: 'articles', label: 'Articles', href: '#' },
  { id: 'authors', label: 'Authors', href: '#' },
  { id: 'newsletter', label: 'Newsletter', href: '#' },
  { id: 'about', label: 'About', href: '#' },
];

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(4);

  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const loadMore = () =>
    setVisiblePosts((prev) => Math.min(prev + 2, filteredPosts.length));

  const searchSuggestions = useMemo(
    () => POSTS.map((p) => ({ name: p.title, href: '#' })),
    []
  );

  return (
    <BlogTemplate
      megaMenu={
        <MegaMenu
          menuData={BLOG_NAVIGATION_DATA}
          logoNode={
            <h1 className="text-2xl font-black tracking-tighter text-gray-900">
              TechBlog<span className="text-purple-600">.</span>
            </h1>
          }
          showSearch={true}
          searchValue={searchQuery}
          onSearchChange={(val) => setSearchQuery(val)}
          searchPlaceholder="Search articles..."
          searchData={searchSuggestions}
          onSignupClick={() => console.log('subscribe')}
        />
      }
      featuredPost={
        <div className="mb-16 overflow-hidden rounded-[2.5rem] shadow-2xl">
          <HeroBanner
            title="Building Scalable Design Systems with Atomic Design"
            subtitle="A comprehensive guide to creating reusable component libraries that scale with your product from day one."
            backgroundImages={[
              'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
            ]}
            buttonText="Read Mastery Guide"
            buttonLink="#"
            textAlign="left"
          />
        </div>
      }
      posts={
        <Section
          heading={`${selectedCategory} Articles`}
          subheading="Deep dives into the latest web technologies and best practices."
          border={false}
          textAlign="left"
        >
          <div className="space-y-16">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <BlogPostCard
                key={post.id}
                imageSrc={post.image} // Note: Using emoji/dummy value
                title={post.title}
                description={post.excerpt}
                authorName={post.author}
                authorImage={undefined} // No author image in current mock data
              />
            ))}

            {visiblePosts < filteredPosts.length && (
              <div className="mt-12 flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl"
                  onClick={loadMore}
                >
                  View More Articles
                </Button>
              </div>
            )}

            {filteredPosts.length === 0 && (
              <div className="rounded-[3rem] bg-gray-50 py-24 text-center">
                <div className="mb-6 text-6xl">🏜️</div>
                <h3 className="text-2xl font-black text-gray-900">
                  No articles found
                </h3>
                <p className="mt-2 text-gray-500">
                  Maybe try a different category or search term?
                </p>
              </div>
            )}
          </div>
        </Section>
      }
      sidebar={
        <div className="sticky top-10 space-y-12 pl-6">
          {/* Categories */}
          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-black uppercase tracking-widest text-gray-900">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-tighter transition-all ${
                    selectedCategory === cat
                      ? 'scale-105 bg-purple-600 text-white shadow-lg shadow-purple-200'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-gray-900 p-10 text-white shadow-xl">
            <div className="absolute -bottom-10 -right-10 -rotate-12 transform text-[10rem] text-white/5 transition-transform duration-700 group-hover:scale-110">
              ✉️
            </div>
            <h3 className="relative z-10 mb-4 text-2xl font-black">
              Fresh Insights
              <br />
              Weekly.
            </h3>
            <p className="relative z-10 mb-8 font-medium leading-relaxed text-gray-400">
              Join 12,000+ developers receiving the latest tech deep-dives
              directly in their inbox.
            </p>
            <div className="relative z-10 space-y-3">
              <input
                type="email"
                placeholder="Your email..."
                className="w-full rounded-2xl border-none bg-white/10 px-6 py-4 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500"
              />
              <Button className="w-full rounded-2xl bg-purple-600 py-6 text-sm font-black uppercase tracking-widest shadow-xl shadow-purple-900/40 hover:bg-purple-700">
                Join the Circle
              </Button>
            </div>
          </div>
        </div>
      }
      footer={
        <FooterWithLinks
          title={BLOG_FOOTER_DATA.title}
          description={BLOG_FOOTER_DATA.description}
          links={BLOG_FOOTER_DATA.links}
          SocialMediaLinks={BLOG_FOOTER_DATA.socialLinks}
        />
      }
    />
  );
};

export default BlogPage;
