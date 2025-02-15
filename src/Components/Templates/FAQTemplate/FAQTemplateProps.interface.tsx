export interface FAQTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode; // Main content of the FAQ section
  sidebarContent?: React.ReactNode; // Optional sidebar content, like related links or additional info
}
