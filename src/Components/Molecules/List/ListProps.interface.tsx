export interface ListProps<T> {
  items: T[]; // Array of items to display in the list
  renderItem: (item: T, index: number) => React.ReactNode; // Custom render function for each item
  className?: string; // Optional additional className for the list container
}
