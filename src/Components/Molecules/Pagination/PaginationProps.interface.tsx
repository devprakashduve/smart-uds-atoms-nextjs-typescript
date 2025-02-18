export interface PaginationProps {
  currentPage: number; // Current active page
  totalPages: number; // Total number of pages
  onPageChange: (page: number) => void; // Function triggered when a page is selected
  className?: string; // Optional additional className for the pagination container
}
