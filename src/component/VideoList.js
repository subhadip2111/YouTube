import React, { useState, useEffect } from 'react';

import CommentsContainer from './CommentsContainer';
import { YOUTUBE_VIDEOS_API,GOOGLE_API_KEY } from '../utils/constants';














const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = GOOGLE_API_KEY;

  useEffect(() => {
    fetch(YOUTUBE_VIDEOS_API)
      .then(response => {
        setVideos(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold ">YouTube Videos</h1>
      {videos.map((video, index) => (
        <div key={index} className="my-4 p-4 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold">{video.snippet.title}</h2>
          <p>{video.snippet.description}</p>
          <CommentsContainer videoId={video.id} apiKey={apiKey} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
