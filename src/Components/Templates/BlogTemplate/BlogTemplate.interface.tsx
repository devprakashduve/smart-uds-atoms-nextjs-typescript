import React from 'react';

export interface BlogTemplateProps {
  /** Top header / navigation bar slot */
  header?: React.ReactNode;
  /** @deprecated Use `header` instead. Kept for backward compatibility. */
  megaMenu?: React.ReactNode;
  featuredPost?: React.ReactNode;
  posts: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
}
