

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage';

export const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(40) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="flex flex-col h-[600px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-4 overflow-hidden shadow-lg">
      <div className="flex-grow overflow-y-scroll">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Subhadip", message: liveMessage }));
          setLiveMessage("");
        }}
        className="flex items-center mt-4"
      >
        <input
          className="flex-grow px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
          type="text"
          placeholder="Type your message..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition focus:outline-none"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

// default LiveChat;
