import React from 'react';
import Button from './Button';

const list = ["All","Geography", "Gaming","Songs", "💻 ", "Live", "Cricket", "Cooking",];

const ButtonList = () => {


  return (
    <div className=" flex ">
      {list.map((ListItem) => (
        <Button name={ListItem} key={ListItem}></Button>
      ))}
    </div>
  );
}

export default ButtonList;
