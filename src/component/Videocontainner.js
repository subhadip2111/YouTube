


import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
// Import the Shimmer component


const Shimmer = () => {
  return (
    <div className="mt-5 m-auto w-4/5" data-testid="shimmer">
      <div className="flex flex-wrap gap-8 justify-evenly ">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <div className="w-72 h-96 p-4 border border-gray-300 rounded-lg shadow-md" key={index}>
              <div className="animate-pulse">
                <div className="h-44 bg-gray-400 mb-3"></div>
                <div className="h-6 bg-gray-400 mb-3"></div>
                <div className="h-6 w-1/2 bg-gray-400 mb-3"></div>
                <div className="flex w-full h-5 gap-2">
                  <div className="w-1/4 h-5 bg-gray-400"></div>
                  <div className="w-1/4 h-5 bg-gray-400"></div>
                  <div className="w-1/4 h-5 bg-gray-400"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};




const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    setIsLoading(false); // Set isLoading to false after data is loaded
  };

  return (
    <div className="flex flex-wrap">
      {isLoading ? (
        // Render the Shimmer component while loading
        <Shimmer />
      ) : (
        // Render actual content when data is loaded
        <>
          {videos[0] && <AdVideoCard info={videos[0]} />}
          {videos.slice(1).map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <div className="flex p-2 m-2">
                <VideoCard info={video} />
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
