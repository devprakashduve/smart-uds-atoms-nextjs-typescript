import React from 'react';

export interface SocialMediaTemplateProps {
  /** Top header / navigation bar slot */
  header?: React.ReactNode;
  leftSidebar?: React.ReactNode;
  feed: React.ReactNode;
  rightSidebar?: React.ReactNode;
  /** @deprecated Use `header` instead. Kept for backward compatibility. */
  megaMenu?: React.ReactNode;
  mobileNav?: React.ReactNode;
}
