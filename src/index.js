import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import VideoCard from './VideoCard.js'
import './VideoCard.css'

import thumbnailImage from './assets/images/pride_and_prejudice_thumbnail.png';

const video = {
  thumbnail: thumbnailImage,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  isLocked: true, 
  rating: 4, 
  genre: 'Fiction',
  year: 1813
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <VideoCard video={video} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
