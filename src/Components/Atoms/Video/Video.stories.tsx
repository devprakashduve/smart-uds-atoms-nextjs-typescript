import Video from '.';

export default {
  title: 'Components/Atoms/Video',
  component: Video,
  tags: ['autodocs'],
};

export const DefaultVideo = {
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Sample Video',
  },
};

export const YouTubeVideo = {
  args: {
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    alt: 'YouTube Video',
    autoplay: false,
    muted: true,
  },
};

export const CustomControlsVideo = {
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Custom Controls Video',
    useCustomControls: true,
    controls: false,
  },
};

export const AutoPlayMuted = {
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Autoplay Video',
    autoplay: true,
    muted: true,
  },
};
