export interface DataTableProps {
  columns: { id: string; label: string; sortable?: boolean }[]; // Column headers and configuration
  data: { [key: string]: any }[]; // Table data (rows)
  onSort?: (columnId: string, direction: 'asc' | 'desc') => void; // Sort handler
  onPageChange?: (page: number) => void; // Page change handler
  currentPage?: number; // Current page number
  totalPages?: number; // Total pages (for pagination)
}
