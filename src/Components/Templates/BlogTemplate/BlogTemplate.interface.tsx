import React from 'react';

export interface BlogTemplateProps {
  megaMenu: React.ReactNode;
  featuredPost?: React.ReactNode;
  posts: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
}
