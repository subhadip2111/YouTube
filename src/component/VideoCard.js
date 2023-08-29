import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 bg-black shadow-lg rounded-lg overflow-hidden hover:red">
      <div
        className="w-full h-44 bg-gradient-to-tr from-blue-400 to-indigo-500"
        style={{ backgroundImage: `url(${thumbnails.medium.url})`, backgroundSize: "cover" }}
      ></div>
      <div className="p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-white">{title}</h2>
        <p className="text-sm text-gray-400 mt-1">{channelTitle}</p>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l4-4 4 4M5 9l4-4 4 4M15 19H4a2 2 0 01-2-2V7a2 2 0 012-2h11a2 2 0 012 2v10a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-xs text-red-500 hover:text-red-700 transition">
            {statistics.viewCount} views
          </p>
        </div>
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

