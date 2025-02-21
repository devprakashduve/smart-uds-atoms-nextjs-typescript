export interface VideoPlayerProps {
  src: string; // The video source URL
  title: string; // Title of the video
  poster?: string; // Optional poster image to show before the video plays
  autoplay?: boolean; // If true, the video will start automatically
  controls?: boolean; // If false, custom controls will be hidden
  width?: number; // Optional width of the video player
  height?: number; // Optional height of the video player
}
