import React, { useState } from 'react';

import { Video, VideoGalleryProps } from './VideoGalleryProps.interface';
import './VideoGallery.css';

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  onVideoClick,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    onVideoClick(video.videoUrl); // Pass video URL to parent component
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-gallery">
      <div className="video-grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-item"
            onClick={() => handleVideoClick(video)}
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="video-details">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <video
              className="video-player"
              controls
              autoPlay
              src={selectedVideo.videoUrl}
            />
            <h3 className="modal-title">{selectedVideo.title}</h3>
            <p className="modal-description">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
