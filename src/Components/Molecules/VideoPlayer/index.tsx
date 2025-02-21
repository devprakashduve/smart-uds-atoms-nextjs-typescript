import React, { useRef, useState, useEffect } from 'react';
import { VideoPlayerProps } from './VideoPlayerProps.interface';
import './VideoPlayer.css';
import Input from '@/Components/Atoms/InputGroup/Input';
import Button from '@/Components/Atoms/Button';

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

  const handleVolumeChange = (value: string) => {
    if (videoRef.current) {
      videoRef.current.volume = Number(value);
      setVolume(Number(value));
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
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
          <Button onClick={togglePlayPause} className="play-pause-button">
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
          <div className="progress-bar" onClick={handleProgressClick}>
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <Input
            type="range"
            className="volume-control"
            min="0"
            max="1"
            step="0.01"
            value={String(volume)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleVolumeChange(e.target.value)
            }
            name={'range'}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
