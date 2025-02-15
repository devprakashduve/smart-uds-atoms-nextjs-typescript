import React from 'react';
import { ImageGalleryProps } from './ImageGalleryProps.interface';
import './ImageGallery.css';

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  onImageClick,
}) => {
  const galleryStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`, // Dynamically set the grid columns
  };

  return (
    <div className="image-gallery" style={galleryStyle}>
      {images.map((image, index) => (
        <div
          key={index}
          className="image-item"
          onClick={() => onImageClick && onImageClick(image.src)} // Handle image click if function provided
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-auto w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
