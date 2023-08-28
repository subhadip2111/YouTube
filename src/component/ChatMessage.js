import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start p-2 mb-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500">
      <img
        className="h-10 w-10 rounded-full mr-3"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-sm font-semibold text-white mr-2">{name}</span>
          <span className="text-xs text-gray-300">Just now</span>
        </div>
        <p className="mt-1 text-white">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
