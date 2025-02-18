export interface ButtonGroupProps {
  buttons: {
    label: string; // The label for the button
    onClick: () => void; // Function to handle button click
    variant?: 'primary' | 'secondary' | 'tertiary'; // Button variant type
    disabled?: boolean; // Optional: Whether the button is disabled
  }[];
}
