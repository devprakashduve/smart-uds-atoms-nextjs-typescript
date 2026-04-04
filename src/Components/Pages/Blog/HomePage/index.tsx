'use client';

import React, { useState, useMemo } from 'react';
import BlogTemplate from '../../../Templates/BlogTemplate';
import CustomLink from '../../../Atoms/CustomLink';
import Button from '../../../Atoms/Button';
import Icon from '../../../Atoms/Icon';
import HeroBanner from '../../../Organisms/HeroBannerGroup/HeroBanner';
import Section from '../../../Organisms/Section';
import SearchBar from '../../../Molecules/SearchBar';
import BlogPostCard from '../../../Molecules/CardsGroup/BlogPostCard';
import MegaMenu from '../../../Organisms/NavBarGroup/MegaMenu';
import FooterWithLinks from '../../../Organisms/FooterGroup/FooterWithLinks';

// Enhanced Mock blog data
const POSTS = [
  { id: 1, title: 'Getting Started with Next.js 14', excerpt: 'Learn how to build modern web applications with the latest features in Next.js 14 including Server Components and Server Actions.', author: 'Jane Doe', initials: 'JD', date: 'Jan 5, 2026', readTime: '5 min read', category: 'Tutorial', image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=600&h=400' },
  { id: 2, title: 'Mastering TypeScript in 2026', excerpt: 'Discover advanced TypeScript patterns and best practices for building scalable applications with the latest language features.', author: 'John Smith', initials: 'JS', date: 'Jan 4, 2026', readTime: '8 min read', category: 'Guide', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600&h=400' },
  { id: 3, title: 'The Future of Web Development', excerpt: 'Explore emerging trends and technologies shaping the future of web development, from AI to edge computing.', author: 'Sarah Johnson', initials: 'SJ', date: 'Jan 3, 2026', readTime: '6 min read', category: 'Opinion', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400' },
  { id: 4, title: 'Effective CSS Architecture', excerpt: 'Building maintainable and scalable CSS for large scale projects using modern tools and methodologies.', author: 'Alex Chen', initials: 'AC', date: 'Jan 2, 2026', readTime: '10 min read', category: 'Guide', image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&q=80&w=600&h=400' },
  { id: 5, title: 'React Performance Audit', excerpt: 'How to identify and fix common performance bottlenecks in your React applications step by step.', author: 'Emma Davis', initials: 'ED', date: 'Jan 1, 2026', readTime: '12 min read', category: 'Tutorial', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400' },
  { id: 6, title: 'State Management in 2026', excerpt: 'A deep dive into the state management landscape and how to choose the right tool for your project.', author: 'Michael Brown', initials: 'MB', date: 'Dec 30, 2025', readTime: '7 min read', category: 'Review', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400' },
];

const CATEGORIES = ['All', 'Tutorial', 'Guide', 'Opinion', 'News', 'Review'];

// Added BLOG_FOOTER_DATA
const BLOG_FOOTER_DATA = {
  title: 'TechBlog.',
  description: 'We are a community of passionate developers and designers dedicated to sharing knowledge and building a better web. Thoughtfully crafted for the modern developer.',
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
  ]
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
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const loadMore = () => setVisiblePosts(prev => Math.min(prev + 2, filteredPosts.length));

  const searchSuggestions = useMemo(() => 
    POSTS.map(p => ({ name: p.title, href: '#' })), []);

  return (
    <BlogTemplate
      megaMenu={
        <MegaMenu 
          menuData={BLOG_NAVIGATION_DATA}
          logoNode={<h1 className="text-2xl font-black text-gray-900 tracking-tighter">TechBlog<span className="text-purple-600">.</span></h1>}
          showSearch={true}
          searchValue={searchQuery}
          onSearchChange={(val) => setSearchQuery(val)}
          searchPlaceholder="Search articles..."
          searchData={searchSuggestions}
          onSignupClick={() => console.log('subscribe')}
        />
      }
      
      featuredPost={
        <div className="rounded-[2.5rem] shadow-2xl overflow-hidden mb-16">
          <HeroBanner
            title="Building Scalable Design Systems with Atomic Design"
            subtitle="A comprehensive guide to creating reusable component libraries that scale with your product from day one."
            backgroundImages={['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072']}
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
              <div className="flex justify-center mt-12">
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
              <div className="text-center py-24 bg-gray-50 rounded-[3rem]">
                <div className="text-6xl mb-6">🏜️</div>
                <h3 className="text-2xl font-black text-gray-900">No articles found</h3>
                <p className="text-gray-500 mt-2">Maybe try a different category or search term?</p>
              </div>
            )}
          </div>
        </Section>
      }
      
      sidebar={
        <div className="sticky top-10 space-y-12 pl-6">
          {/* Categories */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-widest">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all ${
                    selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 scale-105'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="bg-gray-900 rounded-[2rem] p-10 text-white relative overflow-hidden group shadow-xl">
             <div className="absolute -right-10 -bottom-10 text-[10rem] text-white/5 transform -rotate-12 group-hover:scale-110 transition-transform duration-700">✉️</div>
            <h3 className="text-2xl font-black mb-4 relative z-10">Fresh Insights<br/>Weekly.</h3>
            <p className="text-gray-400 mb-8 font-medium relative z-10 leading-relaxed">
              Join 12,000+ developers receiving the latest tech deep-dives directly in their inbox.
            </p>
            <div className="space-y-3 relative z-10">
              <input type="email" placeholder="Your email..." className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-purple-500 outline-none placeholder:text-gray-500" />
              <Button className="w-full bg-purple-600 hover:bg-purple-700 rounded-2xl py-6 font-black uppercase tracking-widest text-sm shadow-xl shadow-purple-900/40">
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
