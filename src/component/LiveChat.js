// import React, { useEffect, useState } from 'react'
// import ChatMessage from './ChatMessage'
// import { useDispatch, useSelector } from 'react-redux'
// import { addMessage } from '../utils/chatSlice'
// import { generateRandomName, makeRandomMessage } from '../utils/helper'





// export const LiveChat = () => {
// const [liveMessage, setLiveMessage] = useState("");
// const chatMessages=useSelector(store=>store.chat.messages)

//     const dispatch=useDispatch()
//          useEffect(() => {
     
//            const i=  setInterval(() => {
//               //Api poling
//                //console.log("api poling")
               
//                dispatch(addMessage({name:generateRandomName(),  message: makeRandomMessage(40) + " 🚀",}))
               
//            },2000)
             
             
//              return ()=> clearInterval(i)
//  },[])
//   return (
 
      
//        <>
//       <div className="w-full h-[600px] ml-2 p-2 border border-red-950 bg-red-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
   
      
             
//         <div>  {
// //             // Disclaimer: Don't use indexes as keys
//              chatMessages.map((c, i) => (
//                <ChatMessage key={i} name={c.name} message={c.message} />
//             ))
//               }
              
// </div>
            


//       </div>

//      <form
//          className="w-full p-2 ml-2 border border-black"
//          onSubmit={(e) => {
//            e.preventDefault();

//            dispatch(
//              addMessage({
//                name: "Subhadip",
//                message: liveMessage,
//              })
//            );
//            setLiveMessage("");
//          }}
//        >
//          <input
//            className="px-2 w-96"
//            type="text"
//            value={liveMessage}
//            onChange={(e) => {
//              setLiveMessage(e.target.value);
//            }}
//          />
//          <button className="px-2 mx-2 bg-green-400">Send</button>
//        </form>
//     </>
//   )
// }


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
  }, []);

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
