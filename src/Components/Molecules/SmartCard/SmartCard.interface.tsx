export interface CardProps {
  title: string; // Title of the card
  bodyContent?: React.ReactNode;
  imageUrl?: string; // Optional: URL of the image to display at the top
  footerContent?: React.ReactNode; // Optional: Content for the card footer (e.g., buttons or links)
  onClick?: () => void; // Optional: Function to handle click event on the card
}
