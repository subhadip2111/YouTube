import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-44 object-cover rounded-t-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold line-clamp-2">{title}</h2>
        <p className="text-gray-600">{channelTitle}</p>
        <p className="text-gray-600">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
