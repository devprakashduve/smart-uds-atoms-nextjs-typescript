export interface SearchBarProps {
  value: string; // Current value of the search input
  placeholder?: string; // Placeholder text for the input
  onChange: (value: string) => void; // Function triggered on input change
  onSearch?: (value: string) => void; // Function triggered on search action (e.g., enter key or button click)
  className?: string; // Optional additional className for the container
  noResultText?: string;
}
