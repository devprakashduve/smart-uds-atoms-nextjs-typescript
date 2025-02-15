import React, { useRef, useState, useEffect } from 'react';
import { VideoPlayerProps } from './VideoPlayerProps.interface';
import './VideoPlayer.css';

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  poster,
  autoplay = false,
  controls = true,
  width = 640,
  height = 360,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const { offsetWidth } = event.currentTarget;
      const offsetX = event.nativeEvent.offsetX;
      const newTime = (offsetX / offsetWidth) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.volume = Number(event.target.value);
      setVolume(Number(event.target.value));
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        className="video-player"
        src={src}
        title={title}
        poster={poster}
        width={width}
        height={height}
        autoPlay={autoplay}
        controls={controls}
      />
      {!controls && (
        <div className="custom-controls">
          <button onClick={togglePlayPause} className="play-pause-button">
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="progress-bar" onClick={handleProgressClick}>
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <input
            type="range"
            className="volume-control"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
