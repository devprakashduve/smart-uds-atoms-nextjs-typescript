export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface VideoGalleryProps {
  videos: Video[];
  onVideoClick: (videoUrl: string) => void; // Handler to handle video click
}
