import React from 'react';

export interface DashboardTemplateProps {
  /** Top navigation bar slot */
  topbar?: React.ReactNode;
  /** Left sidebar navigation slot */
  sidebar?: React.ReactNode;
  /** Whether the sidebar starts collapsed */
  sidebarCollapsed?: boolean;
  /** Main content area */
  children: React.ReactNode;
  /** Optional page header (title, breadcrumb, actions) shown above content */
  pageHeader?: React.ReactNode;
  /** Optional footer */
  footer?: React.ReactNode;
}
