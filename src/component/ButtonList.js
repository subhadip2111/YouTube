import React from 'react';
import Button from './Button';

const buttonData = [
  "All", "Geography", "Gaming", "Songs",
  "Live", "Cricket", "Cooking",
  "News", "Comedy", "Movies", "Fitness",
  "Fashion", "Tech", "Travel", "Art",
  
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto py-2 space-x-4">
      {buttonData.map((item) => (
        <Button
          name={item}
          key={item}
          className="bg-white text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
        />
      ))}
    </div>
  );
}

export default ButtonList;
