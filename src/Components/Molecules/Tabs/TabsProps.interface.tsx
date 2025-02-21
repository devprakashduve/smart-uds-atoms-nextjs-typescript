export interface Tab {
  id: string; // Unique identifier for the tab
  label: string; // Label for the tab
  content: React.ReactNode; // Content to render when the tab is active
  disabled?: boolean; // Optional flag to disable the tab
}

export interface TabsProps {
  tabs: Tab[]; // Array of tabs
  defaultActiveTab?: string; // The ID of the tab to be active initially
  onTabChange?: (activeTabId: string) => void; // Callback for when the active tab changes
  className?: string; // Optional additional className for the container
}
