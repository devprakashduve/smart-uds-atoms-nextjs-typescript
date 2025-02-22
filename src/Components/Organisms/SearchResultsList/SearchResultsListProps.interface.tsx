export interface SearchResultListProps {
  results: {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
  }[]; // Array of search result items
  isLoading: boolean; // Flag for loading state
  totalResults: number; // Total number of search results
  currentPage: number; // Current page number
  totalPages: number; // Total pages
  onPageChange: (page: number) => void; // Page change handler
  onResultClick?: (id: string) => void; // Optional handler for when a result is clicked
}
