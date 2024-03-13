import React, { useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { thumbnail, title, author, isLocked, rating, genre, year } = video;

  console.log(thumbnail)

  return (
    <div>
    <div className="parent">
      <div
        className={`video-card ${isHovered ? 'video-card--hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="video-card__thumbnail-container">
          <img src={thumbnail} alt={title} className="video-card__thumbnail" />
          {isLocked ? (
            <span className="video-card__locked-icon">Purchase</span>
          ) : (
            <span className="video-card__unlocked-icon">Watch</span>
          )}
        </div>
        <div className="video-card__details">
          <h3 className="video-card__title">{title}</h3>
          <h3 className="video-card__author">{author}</h3>
        </div>
        {isHovered && (
          <div className="video-card__hover-details">
            <p>Genre: {genre}</p>
            <p>Year: {year}</p>
          </div>
        )}
      </div>
    </div>
    <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default VideoCard;