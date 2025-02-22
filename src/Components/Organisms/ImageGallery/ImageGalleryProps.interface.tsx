export interface ImageGalleryProps {
  images: { src: string; alt: string }[]; // Array of images with src and alt attributes
  columns?: number; // Optional: Number of columns in the gallery (default is 3)
  onImageClick?: (src: string) => void; // Optional: Function to handle image click (e.g., open in a lightbox)
}
