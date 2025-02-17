export interface VideoProps {
  src: string;
  alt?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  width?: string;
  height?: string;
  useCustomControls?: boolean; // New prop for custom controls
}
