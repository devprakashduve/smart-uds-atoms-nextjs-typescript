export interface DashboardTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode; // Main content of the dashboard
  sidebarContent: React.ReactNode; // Sidebar content like links or navigation
}
