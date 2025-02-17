import React, { useState, useRef, useEffect } from 'react';
import './Video.css';
import { VideoProps } from './VideoProps.interface';

const Video: React.FC<VideoProps> = ({
  src,
  alt = '',
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
  width = '100%',
  height = 'auto',
  useCustomControls = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-container" style={{ width, height }}>
      {isYouTube ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${getYouTubeId(src)}?autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&loop=${loop ? 1 : 0}&controls=${controls ? 1 : 0}`}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-element"
        />
      ) : (
        <div className="custom-video-wrapper">
          <video
            ref={videoRef}
            src={src}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            className="video-element"
            onClick={useCustomControls ? togglePlay : undefined}
            {...(!useCustomControls && { controls })}
          />
          {useCustomControls && (
            <div className="custom-controls">
              <div className="progress-bar" onClick={handleProgressClick}>
                <div className="progress" style={{ width: `${progress}%` }} />
              </div>
              <div className="controls-bottom">
                <button onClick={togglePlay}>{isPlaying ? '⏸' : '▶'}</button>
                <span className="time">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <button onClick={toggleMute}>{isMuted ? '🔇' : '🔊'}</button>
                <button onClick={() => videoRef.current?.requestFullscreen()}>
                  ⛶
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Video;
