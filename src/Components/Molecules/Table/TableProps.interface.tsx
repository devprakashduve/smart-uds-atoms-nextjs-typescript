export interface TableColumn<T> {
  key: keyof T; // Key to access the data in a row
  header: string; // Header text for the column
  render?: (value: T[keyof T], row: T) => React.ReactNode; // Optional custom rendering for the column
}

export interface TableProps<T> {
  data: T[]; // Array of data to display
  columns: TableColumn<T>[]; // Array of column definitions
  onRowClick?: (row: T) => void; // Callback for when a row is clicked
  className?: string; // Optional additional className for the table
}
